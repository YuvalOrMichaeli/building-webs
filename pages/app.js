'use strict';

console.log('Hello world');

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // מנע את שליחת הטופס בדרך הרגילה
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // הצג הודעה אחרי שליחה
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `תודה ${name}! ההודעה שלך התקבלה, אנחנו ניצור קשר בהקדם.`;
  
    // אפשר להוסיף את הקוד לשליחה לשרת אם אתה רוצה לשלוח את המידע במקום לשמור אותו רק בצד המשתמש
  });
  


