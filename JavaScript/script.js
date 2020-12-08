$(document).ready(function () {
    let sRate1 = 0;
    let sRate2 = 0;

    $.fn.sendData = () => {
        let counts = sessionStorage.getItem("count");
        let successRate1 = sessionStorage.getItem("sRate1");
        let successRate2 = sessionStorage.getItem("sRate2");
        let successRate = (successRate1 * 1) + (successRate2 * 1);
        if (counts == successRate) {
            swal("Good job!", "Form Submitted Successfully!", "success");

            let formGroup2 = document.querySelectorAll('.col-auto.my-2.box');
            let formGroup = document.querySelectorAll('.form-group');


            setTimeout(() => {

                sessionStorage.removeItem("count");
                sessionStorage.removeItem("sRate1");
                sessionStorage.removeItem("sRate2");

                for (let i in formGroup) {
                    $(formGroup[i]).removeClass("success");
                    $(formGroup[i]).removeClass("error");
                }

                for (let j in formGroup2) {
                    $(formGroup2[j]).removeClass("success");
                    $(formGroup2[j]).removeClass("error");
                }

                $("#CourseTitle").val("");
                $("#UserName").val("");
                $("#UserPosition").val("");
                $("#userCompany").val("");
                $("#userEmail").val("");
                $("#userAddLine1").val("");
                $("#userAddLine2").val("");
                $("#UserPhone").val("");
                $("#UserCity").val("");
                $("#UserState").val("");
                $("#UserPinCode").val("");
                $("#UserCountry").val("");

            }, 2000);
        }


    }

    $.fn.SuccessCheck = () => {
        let formGroup = document.querySelectorAll('.form-group');
        let count1 = formGroup.length;
        let formGroup2 = document.querySelectorAll('.col-auto.my-2.box');
        let count2 = formGroup2.length;
        count = (count1 * 1) + (count2 * 1);

        sessionStorage.setItem("count", count)

        for (let i in formGroup) {
            if (formGroup[i].className != "form-group error") {
                if (formGroup[i].className == "form-group success") {
                    if (sRate1 != count1) {
                        sRate1++;
                        sessionStorage.setItem("sRate1", sRate1)
                    } else {
                        sRate1 += 0;
                    }
                }
            } else {
                sRate1 = 0;
            }
        }

        for (let j in formGroup2) {
            if (formGroup2[j].className != "col-auto my-2 box error") {
                if (formGroup2[j].className == "col-auto my-2 box success") {
                    if (sRate2 != count2) {
                        sRate2++;
                        sessionStorage.setItem("sRate2", sRate2)
                    } else {
                        sRate2 += 0;
                    }
                }
            } else {
                sRate2 = 0;
            }
        }

        $.fn.sendData();
    }


    // set success indication
    $.fn.setSuccessIndication = (input) => {
        let parent = $(input).parent();
        $(parent).removeClass("error");
        $(parent).addClass("success");
    }

    // set error indication
    $.fn.setErrorIndication = (input) => {
        let parent = $(input).parent();
        $(parent).removeClass("success");
        $(parent).addClass("error");
    }

    // form validation
    $.fn.validation = (titleVal, userFullNameVal, userPositionVal, userCompanyVal, userEmailVal, userAddLine1Val, userAddLine2Val, userPhoneVal, userCityVal, userStateVal, userPinCodeVal, userCountryVal) => {

        // title validation
        $.fn.validTitleVal = (titleVal) => {
            let letters = /^[a-zA-Z," "]+$/
            if (titleVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        // full name validation
        $.fn.validUserNameVal = (userFullNameVal) => {
            let letters = /^[a-zA-Z," "]+$/
            if (userFullNameVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        // position validation
        $.fn.validPositionVal = (userPositionVal) => {
            let letters = /^[a-zA-Z," "]+$/;
            if (userPositionVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        // userCompany Validation
        $.fn.validUserCompanyVal = (userCompanyVal) => {
            let letters = /^[a-zA-Z," "]+$/;
            if (userCompanyVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        // email validation
        $.fn.validUserEmailVal = (userEmailVal) => {
            let atSymbol = userEmailVal.indexOf("@")
            let dotSymbol = userEmailVal.indexOf(".");
            if (atSymbol == -1 || atSymbol < 3) {
                return false;
            } else if (dotSymbol == -1) {
                return false;
            } else if (dotSymbol - atSymbol < 4) {
                return false;
            } else if (dotSymbol !== userEmailVal.lastIndexOf(".")) {
                return false;
            } else {
                return true;
            }
        }

        // phone number validation
        $.fn.validUserPhoneVal = (userPhoneVal) => {
            let digits = /^[0-9]+$/;
            if (userPhoneVal.match(digits)) {
                return true;
            } else {
                return false;
            }
        }

        // city validation
        $.fn.validUserCityVal = (userCityVal) => {
            let letters = /^[a-zA-Z," "]+$/
            if (userCityVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        $.fn.validUserStateVal = (userStateVal) => {
            let letters = /^[a-zA-Z," "]+$/
            if (userStateVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        $.fn.validUserPinCode = (userPinCodeVal) => {
            let digits = /^[0-9]+$/;
            if (userPinCodeVal.match(digits)) {
                return true;
            } else {
                return false;
            }
        }

        $.fn.validUserCountryVal = (userCountryVal) => {
            let letters = /^[a-zA-Z," "]+$/
            if (userCountryVal.match(letters)) {
                return true;
            } else {
                return false;
            }
        }

        if (titleVal === "") {
            $.fn.setErrorIndication(CourseTitle);
        } else if (!$.fn.validTitleVal(titleVal)) {
            $.fn.setErrorIndication(CourseTitle);
        } else {
            $.fn.setSuccessIndication(CourseTitle);
        }

        if (userFullNameVal === "") {
            $.fn.setErrorIndication(UserName);
        } else if (!$.fn.validUserNameVal(userFullNameVal)) {
            $.fn.setErrorIndication(UserName);
        } else {
            $.fn.setSuccessIndication(UserName);
        }

        if (userPositionVal === "") {
            $.fn.setErrorIndication(UserPosition);
        } else if (!$.fn.validPositionVal(userPositionVal)) {
            $.fn.setErrorIndication(UserPosition);
        } else {
            $.fn.setSuccessIndication(UserPosition);
        }

        if (userCompanyVal === "") {
            $.fn.setErrorIndication(userCompany);
        } else if (!$.fn.validUserCompanyVal(userCompanyVal)) {
            $.fn.setErrorIndication(userCompany);
        } else {
            $.fn.setSuccessIndication(userCompany);
        }

        if (userEmailVal === "") {
            $.fn.setErrorIndication(userEmail);
        } else if (!$.fn.validUserEmailVal(userEmailVal)) {
            $.fn.setErrorIndication(userEmail);
        } else {
            $.fn.setSuccessIndication(userEmail);
        }

        if (userAddLine1Val === "") {
            $.fn.setErrorIndication(userAddLine1);
        } else {
            $.fn.setSuccessIndication(userAddLine1);
        }

        if (userAddLine2Val === "") {
            $.fn.setErrorIndication(userAddLine2);
        } else {
            $.fn.setSuccessIndication(userAddLine2);
        }

        if (userPhoneVal === "") {
            $.fn.setErrorIndication(UserPhone);
        } else if (!$.fn.validUserPhoneVal(userPhoneVal)) {
            $.fn.setErrorIndication(UserPhone);
        } else if (userPhoneVal.length > 10 || userPhoneVal < 10) {
            $.fn.setErrorIndication(UserPhone);
        } else {
            $.fn.setSuccessIndication(UserPhone);
        }

        if (userCityVal === "") {
            $.fn.setErrorIndication(UserCity);
        } else if (!$.fn.validUserCityVal(userCityVal)) {
            $.fn.setErrorIndication(UserCity);
        } else {
            $.fn.setSuccessIndication(UserCity);
        }

        if (userStateVal === "") {
            $.fn.setErrorIndication(UserState);
        } else if (!$.fn.validUserStateVal(userStateVal)) {
            $.fn.setErrorIndication(UserState);
        } else {
            $.fn.setSuccessIndication(UserState);
        }

        if (userPinCodeVal === "") {
            $.fn.setErrorIndication(UserPinCode);
        } else if (!$.fn.validUserPinCode(userPinCodeVal)) {
            $.fn.setErrorIndication(UserPinCode);
        } else if ((userPinCodeVal.length > 6) || (userPinCodeVal.length < 6)) {
            $.fn.setErrorIndication(UserPinCode);
        } else {
            $.fn.setSuccessIndication(UserPinCode);
        }

        if (userCountryVal === "") {
            $.fn.setErrorIndication(UserCountry);
        } else if (!$.fn.validUserCountryVal(userCountryVal)) {
            $.fn.setErrorIndication(UserCountry);
        } else {
            $.fn.setSuccessIndication(UserCountry);
        }

        $.fn.SuccessCheck();
    }

    $("#submitBtn").click(function (e) {
        e.preventDefault();
        let titleVal = $("#CourseTitle").val();
        let userFullNameVal = $("#UserName").val();
        let userPositionVal = $("#UserPosition").val();
        let userCompanyVal = $("#userCompany").val();
        let userEmailVal = $("#userEmail").val();
        let userAddLine1Val = $("#userAddLine1").val();
        let userAddLine2Val = $("#userAddLine2").val();
        let userPhoneVal = $("#UserPhone").val();
        let userCityVal = $("#UserCity").val();
        let userStateVal = $("#UserState").val();
        let userPinCodeVal = $("#UserPinCode").val();
        let userCountryVal = $("#UserCountry").val();

        let btn = $("#submitBtn").val();
        console.log(btn);

        $.fn.validation(titleVal, userFullNameVal, userPositionVal, userCompanyVal, userEmailVal, userAddLine1Val, userAddLine2Val, userPhoneVal, userCityVal, userStateVal, userPinCodeVal, userCountryVal);
    });
});





// $courseTitle = $_POST['CourseTitle'];
// $UserName = $_POST['UserName'];
// $UserPosition = $_POST['UserPosition'];
// $userCompany = ['userCompany'];
// $userEmail = ['userEmail'];
// $userAddLine1 = ['userAddLine1'];
// $userAddLine2 = ['userAddLine2'];
// $UserCountry = ['UserCountry'];
// $UserCity = ['UserCity'];
// $UserState = ['UserState'];
// $UserPinCode = ['UserPinCode'];
// $UserPhone = ['UserPhone'];

// if (!empty($courseTitle) || !empty($UserName) || !empty($UserPosition) || !empty($userCompany) || !empty($userEmail) || !empty($userAddLine1) || !empty($userAddLine2) || !empty($UserCountry) || !empty($UserCity) || !empty($UserState) || !empty($UserPinCode) || !empty($UserPhone))