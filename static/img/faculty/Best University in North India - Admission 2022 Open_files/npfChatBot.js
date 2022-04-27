var $chatWindow = $('#messages');
var lastMessageReceivedAt    = 0;
var intervalSessionEnd          = '';
var intervalReStartChatBot =     '';
var lastEventReceivedAt    = 0;
var sessionEnded    = false;
var chatChaining = [];
var channelId = getUniqueChannelName();
var intent = {};
var currentNode = '';
var complete = true;
var extractedParameters = {};
var missingParameters = {};
var botResponseAwaited = false;
var jsonAttributes = {};
var context = false;
var hideFreeText = false;
var currentURL = (window.location != window.parent.location)? document.referrer: document.location.href;

$(function () {
    window.addEventListener('message', event => {
        if(event.data=="startChat" || event.data=="restartChat"){
            var currentTime = Math.floor(Date.now() / 1000);
            // either it should be first event or the event should be maintaining 5 sec gap and chatbot must have been initialized
            if( lastEventReceivedAt==0 || (currentTime-lastEventReceivedAt > 5)){
                lastToLastEventReceivedAt = lastEventReceivedAt;
                lastEventReceivedAt    = Math.floor(Date.now() / 1000);
                if(event.data=="startChat"){
                    if(lastToLastEventReceivedAt==0){
                        startChat();
                    }
                }else if(event.data=="restartChat"){
                    reStartChat();
                }
            }
        }
    });
    $(document).on("click", "button.ac-pushButton,a.ac-pushButton", handleInputButtonClick);

    $(document).on("change", "select.select_drp", handleDropdownChange);

    $(document).on("click", "#email_otp_verify", handleEmailOtpVerifyClick);

    $(document).on("click", "#email_otp_resend", handleEmailOtpResendClick);

    $(document).on("click", "#otp_email_change", handleEmailOtpChangeClick);

    $(document).on("click", "#mobile_otp_verify", handleMobileOtpVerifyClick);

    $(document).on("click", "#mobile_otp_resend", handleMobileOtpResendClick);

    $(document).on("click", "#otp_mobile_change", handleMobileOtpChangeClick);

    $(document).on("click", "#sendClickBtn", sendFreeTextMessage);

    $(document).on('keydown',"#npfMsg-in", function (event) {
        if (event.keyCode == 13) {
            sendFreeTextMessage();
        }
    });

});

function startChat(){
    clearInitialIntervals();
    $chatWindow.empty();
    initiateChatSession();
}

function reStartChat(){
    clearInitialIntervals();
    lastMessageReceivedAt    = 0;
    $chatWindow.empty();
    initiateChatSession();
}

function initiateChatSession(){
    channelId = getUniqueChannelName();
    sendMessage("init_conversation", 1);
    if(chatWindow != "pageLoad"){
        saveChatTransaction("create");
    }
    lastMessageReceivedAt    = Math.floor(Date.now() / 1000);
}

function sendMessage(msg, initiateConv=0) {
    if(msg!=="init_conversation" && chatWindow == "pageLoad"){
        saveChatTransaction("create");
        chatWindow = '';
    }

    lastMessageReceivedAt    = Math.floor(Date.now() / 1000);
    if(context===false){
        context = {'userId':userIdentityNiaa,'channelId':channelId,'assistantId':chatbotId};
    }

    context['currentURL']  = currentURL;
    var data = {
                'input':msg,
                'user_id':userIdentityNiaa,
                'channel_id':channelId,
                'context':context,
                "speechResponse": [],
                'currentNode':currentNode,
                'complete':complete,
                "parameters": [],
                'extractedParameters':extractedParameters,
                'missingParameters':missingParameters,
                'jsonAttributes' : jsonAttributes,
                'intent':intent,
                'collegeId':collegeId
            };
    $.ajax({
        url: sendMsgUrl,
        type: 'post',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
        beforeSend: function(){
            $('#sendClickBtn').prop('disabled', true);
            msgLoaderHtml = '<div id="messagesLoader" class=chatWindowInitialMessage><div class="__npfchatmsg_left">'
            msgLoaderHtml += '<div class="botIcon bgIcon"></div><div class="ac-container ac-adaptiveCard" tabindex="0">'
            msgLoaderHtml += '<div class="ac-textBlock"><div class="message"><div class="chatLoader">'
            msgLoaderHtml += '<div class="typing typing-1"></div><div class="typing typing-2"></div><div class="typing typing-3"></div>'
            msgLoaderHtml += '</div></div></div></div></div></div>'
            if(msg=="init_conversation"){
                $chatWindow.append(msgLoaderHtml);
            }else{
                setTimeout(function(){ $chatWindow.append(msgLoaderHtml); }, 100);
            }
            if(initiateConv == 1) {
                $("#npfmessage-input").hide()
            }
        },
        complete: function () {
            $('#sendClickBtn').prop('disabled', false);
            jsonAttributes["botMessage"] = '';
            jsonAttributes["userMessage"] = '';
            if(msg=="init_conversation"){
                $chatWindow.find("#messagesLoader").remove()
            }else{
                setTimeout(function(){ $chatWindow.find("#messagesLoader").remove() }, 100);
            }
            if (hideFreeText == true) {
                $("#npfmessage-input").hide()
            } else {
                $("#npfmessage-input").show()
            }
        },
        success: function (response) {
            if(typeof response.error !== 'undefined' && response.error=='session_logout') {
                window.location.replace(loginRedirectUrl);
            }
            if(response.status ==1) {
                context = response.data.context;
                currentNode = response.data.currentNode;
                intent = response.data.intent;
                missingParameters = response.data.missingParameters;
                extractedParameters = response.data.extractedParameters;
                complete = response.data.complete;
                var free_text = 0;
                if (response.data.dont_allow_free_text == 1) {
                    $("#npfmessage-input").hide()
                    hideFreeText = true
                    free_text = 1;
                } else {
                    $("#npfmessage-input").show()
                    hideFreeText = false
                }
                if($("#codeTraceContainer").length){
                    $.each(response.data.responseTrace, function( index, responseTraceObj ) {
                        $.each(responseTraceObj, function( index, value ) {
                            if(typeof value==="object"){
                                $("#codeTraceContainer").append("<strong>"+index+":</strong>");
                                var innerHtml = '';
                                $.each(value, function( value_index, value_value ) {
                                    if(typeof value==="object"){
                                        value_value = JSON.stringify(value_value);
                                        if(value_value.indexOf("owl-carousel")!=-1){
                                            value_value = "Carousel";
                                        }
                                        if($.isNumeric(value_index)){
                                            innerHtml += value_value+"<BR>";
                                        }
                                        else{
                                            innerHtml += "<strong>"+value_index+":</strong> "+value_value+"<BR>";
                                        }
                                    }
                                });
                                $("#codeTraceContainer").append("<div style='padding-left:20px;'>"+innerHtml+"</div>");
                            }else{
                                if(typeof value==="string" && value.indexOf("owl-carousel")!=-1){
                                    value = "Carousel";
                                }
                                 $("#codeTraceContainer").append("<strong>"+index+":</strong> "+value);

                                 if(index == "Intent Response"){

                                     $("#codeTraceContainer").ready(function() {
                                        $("#codeTraceContainer").find("#email_otp").attr({'id':'email_otp_data1'});
                                        $("#codeTraceContainer").find("#email_otp_verify").attr({'id':'email_otp_verify_data1'});
                                        $("#codeTraceContainer").find("#email_otp_resend").attr({'id':'email_otp_resend_data1'});
                                        $("#codeTraceContainer").find("#otp_email_change").attr({'id':'otp_email_change_data1'});

                                        $("#codeTraceContainer").find("#mobile_otp").attr({'id':'mobile_otp_data1'});
                                        $("#codeTraceContainer").find("#mobile_otp_verify").attr({'id':'mobile_otp_verify_data1'});
                                        $("#codeTraceContainer").find("#otp_mobile_change").attr({'id':'otp_mobile_change_data1'});
                                        $("#codeTraceContainer").find("#mobile_otp_resend").attr({'id':'mobile_otp_resend_data1'});

                                        $("#codeTraceContainer").find(".selectBox").attr('class','selectBox_data1');
                                        $("#codeTraceContainer").find(".select_drp").attr('class','select_drp_data1');
                                        });
                                    $("#codeTraceContainer").ready(function() {
                                        $("#codeTraceContainer").find("#mobile_otp_data1").prop("disabled", true);
                                        $("#codeTraceContainer").find("#mobile_otp_verify_data1").remove();
                                        $("#codeTraceContainer").find("#otp_mobile_change_data1").prop("disabled", true);
                                        $("#codeTraceContainer").find("#mobile_otp_resend_data1").prop("disabled", true);

                                        $("#codeTraceContainer").find("#email_otp_data1").prop("disabled", true);
                                        $("#codeTraceContainer").find("#email_otp_verify_data1").remove();
                                        $("#codeTraceContainer").find("#email_otp_resend_data1").prop("disabled", true);
                                        $("#codeTraceContainer").find("#otp_email_change_data1").prop("disabled", true);

                                        $("#codeTraceContainer").find(".selectBox_data1").prop("disabled", true);
                                        $("#codeTraceContainer").find(".select_drp_data1").prop("disabled", true);
                                    });
                                }

                             }
                            $("#codeTraceContainer").append("<BR>");
                        });
                        $("#codeTraceContainer").append("<HR>");
                    });
                    $("a","#codeTraceContainer").click(function(e) {
                      e.preventDefault();
                    });
                    $("button","#codeTraceContainer").attr("disabled","disabled");

                    var scrollPosition = $("#codeTraceContainer")[0].scrollHeight;
                    if (initiateConv != 1) {
                        $('.tracenow-content').animate({scrollTop: scrollPosition}, 2000);
                    }
                }
                $.each(response.data.speechResponse , function(index, val) {
                    if(val !== ''){
                        printMessage("System", val, initiateConv, free_text);
                    }
                });

            } else {
                console.log(response)
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(thrownError);
        }
    });
}

function saveChatTransaction() {
    if(userIdentityNiaa.indexOf("Simulator_") == -1){
        $.ajax({
            url: saveChatTransactionUrl,
            type: 'post',
            data : {'user_id':userIdentityNiaa, 'college_id': collegeId, 'channelId':channelId},
            dataType: 'json',
            success: function (response) {
                if(typeof response.error !== 'undefined' && response.error=='session_logout') {
                    window.location.replace(loginRedirectUrl);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
                console.log(thrownError);
            }
        });
    }
}

// Helper function to print chat message to the chat window
function printMessage(fromUser, message, initiateConv=0, free_text) {
    $('.default-chatbot-indicator').show();
    var userClass = '__npfchatmsg_left fadeIn';
    var userImage = 'botIcon bgIcon';

    if (fromUser.toLowerCase() !== "system") {
        userClass = '__npfchatmsg_right';
        userImage = 'userIcon bgIcon';
    }else{
        fromUser  = chatbotIdentity;

        if(message.indexOf("<") <= -1 && message.indexOf(">") <= -1 || message.indexOf("drop_down") > -1){
            console.log("Done")
        }
        else if( message.indexOf("otpCard") > -1 || free_text == 1){
            hideFreeText = true
            if( message.indexOf("otpCard") > -1){
                $('.otpCard').parents('.__npfchatmsg_left').removeClass("delay-1s");
                userClass += " otpCardDiv zoomIn";
            }
        } else {
            hideFreeText = false
        }

        if( message.indexOf("buttonCard") > -1 ){
            $('.buttonCard').parents('.__npfchatmsg_left').removeClass("delay-1s");
            userClass += " buttonCardDiv zoomIn";
        }

        if( message.indexOf("npf-card") > -1 ){
            $('.npf-card').parents('.__npfchatmsg_left').removeClass("delay-1s");
            userClass += " buttonCardDiv cardEnable zoomIn";
        }
        if( message.indexOf("owl-carousel") > -1 ){
            $('.owl-carousel').parents('.__npfchatmsg_left').removeClass("delay-1s");
            userClass += " buttonCardDiv cardSliderEnable zoomIn";
        }
        if( message.indexOf("sessionButtonCard") > -1 ){
            $('.sessionButtonCard').parents('.__npfchatmsg_left').removeClass("delay-1s");
            userClass += " sessionButtonCardDiv zoomIn";
        }
    }

    var messageHtml = '<div class="'+ userClass + '">' +
            '<div class="' + userImage + '"></div><div class="npfChat_loader"></div>' +
            '<div class="ac-container ac-adaptiveCard"><div class="ac-textBlock">' +
            '<p class="name">' + fromUser + '</p>' +
            '<div class="message">' + message + '</div>' +
            '<div class="chatLoader dataLoader"><div class="typing typing-1"></div><div class="typing typing-2"></div><div class="typing typing-3"></div></div>' +
            '</div>' +
            '</div>';

    $chatWindow.append(messageHtml);

    var scrollPosition = $chatWindow[0].scrollHeight;


    if (initiateConv != 1) {
        $('.chatBody').animate({scrollTop: scrollPosition}, 1000);
    }
    if( message.indexOf("otpCard") > -1){
        $(document).find('#email_otp_resend').css({"opacity": "0", "pointer-events": "none"});
        $(document).find('#mobile_otp_resend').css({"opacity": "0", "pointer-events": "none"});
        setTimeout(
            function(){
                $(document).find('#email_otp_resend').css({"opacity": "1", "pointer-events": "auto"});
            } , 10000
        );
        setTimeout(
            function(){
                $(document).find('#mobile_otp_resend').css({"opacity": "1", "pointer-events": "auto"});
            } , 10000
        );
    }

}

function showChatSessionEndMessage(){
    printMessage("System", "<div class='sessionButtonCard'><button aria-label='Start New Session' type='button' class='start-new-chat start-over-btn style-default'>Start Over</button>");
}

function handleMobileOtpChangeClick(){
    $(this).parents("div.__npfchatmsg_left").remove();
    printMessage("User", "Change Mobile");
    sendMessage('collect_mobile');
}

function handleMobileOtpResendClick(){
    $(this).parents("div.__npfchatmsg_left").remove();
    printMessage("User", "Resend OTP");
    sendMessage('mobile_otp_resend');
}

function handleMobileOtpVerifyClick(){
    var mobileOTP   = $.trim($("#mobile_otp").val());
    if(mobileOTP!==""){
        $(this).parents("div.__npfchatmsg_left").remove();
        printMessage("User", mobileOTP);
        sendMessage('verify_mobile_otp :'+mobileOTP);
    }
}

function handleEmailOtpChangeClick(){
    $(this).parents("div.__npfchatmsg_left").remove();
    printMessage("User", "Change Email");
    sendMessage('collect_email');
}

function handleEmailOtpResendClick(){
    $(this).parents("div.__npfchatmsg_left").remove();
    printMessage("User", "Resend OTP");
    sendMessage('email_otp_resend');
}

function handleEmailOtpVerifyClick(){
    var emailOTP   = $.trim($("#email_otp").val());
    if(emailOTP!==""){
        $(this).parents("div.__npfchatmsg_left").remove();
        printMessage("User", emailOTP);
        sendMessage('verify_email_otp :'+emailOTP);
    }
}

function handleInputButtonClick(){
    var userMessage = $(this).text();
    var botMessage  = $(this).text();
    if(typeof $(this).data("botmessage") !=="undefined" && $(this).data("botmessage") !==""){
        botMessage  = $(this).data("botmessage");
    }
    if(botMessage!==userMessage){
        jsonAttributes["botMessage"] = botMessage;
        jsonAttributes["userMessage"] = userMessage;
    }
    sendMessage(botMessage);
    printMessage("User", userMessage);
}

function handleDropdownChange(){
    var userMessage = $(this).find('option:selected').text();
    var botMessage  = $(this).val();
    if(botMessage!==userMessage){
        jsonAttributes["botMessage"] = botMessage;
        jsonAttributes["userMessage"] = userMessage;
    }
    sendMessage(botMessage);
    printMessage("User", userMessage);
}
function stripHTML(str){
    if(str.indexOf("<")===0 && str.indexOf(" ")!==-1 && str.indexOf(">",str.indexOf(" "))!==-1 ){
        str = str.substring(0,str.indexOf(" "))+str.substring(str.indexOf(">",str.indexOf(" ")));
    }
    if(str.indexOf('&#60;')===0 && str.indexOf('&#62;')!==-1){
        while(str.indexOf('&#60;')!==-1){
            str = str.replace('&#60;', "<");
        }
        while(str.indexOf('&#62;')!==-1){
            str = str.replace('&#62;', ">");
        }
        while(str.indexOf('&#47;')!==-1){
            str = str.replace('&#47;', "</");
        }
    }
    var strippedText = $("<div/>").html(str).text();
    return strippedText;
}

function sendFreeTextMessage(){
    var message = stripHTML($.trim($("#npfMsg-in").val()));
    message = escapeHtmlEntities(message);
    if(message!==''){
        $("#npfMsg-in").val('');
        printMessage("User", message);
        sendMessage(message);
    }
}

function clearInitialIntervals(){}

function getUniqueChannelName(){
    var unique_id = Math.floor(Math.random() * 26) + Date.now();
    return "CH"+unique_id;
}

function escapeHtmlEntities (str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/javascript/gi, '')
    .replace(/jquery/gi, '')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}