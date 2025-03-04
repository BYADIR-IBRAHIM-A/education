 // تعريف دالة لإيجاد وطباعة أكبر قيمة في مصفوفة معينة
function printMaxValue(arr) {
    if (arr.length === 0) {
        console.log("المصفوفة فارغة");
        return;
    }
    
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    console.log("أكبر قيمة في المصفوفة هي:", maxValue);
}

// استلام الأرقام من المستخدم
function getInputNumbers() {
    let numbers = [];
    let input;
    while (true) {
        input = prompt("أدخل رقم (أو اكتب 'خروج' لإنهاء الإدخال):");
        if (input.toLowerCase() === 'خروج') {
            break;
        }
        let num = parseFloat(input);
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            console.log("الرجاء إدخال رقم صحيح.");
        }
    }
    return numbers;
}

// الحصول على الأرقام من المستخدم وتشغيل الدالة
const userInputArray = getInputNumbers();
printMaxValue(userInputArray);
