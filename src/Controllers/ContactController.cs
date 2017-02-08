using System;
using DataWells.Models;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;

namespace DataWells.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {

        [HttpPost]
        public void Post([FromBody] Contact contact)
        {
            if (contact == null || !ModelState.IsValid) return;
            var completeMessage = $"Name: {contact.Name} \rPhone: {contact.Phone} \rEmail: {contact.Email} \rMessage: {contact.Message} ";
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("DataWells", "mail@mail.datawells.us"));
            emailMessage.To.Add(new MailboxAddress("Caleb Wells", "calebcwells@gmail.com"));
            emailMessage.Subject = "[DataWells] - Contact from " + contact.Name;
            emailMessage.Body = new TextPart("plain") { Text = completeMessage };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.sparkpostmail.com", 587, SecureSocketOptions.StartTls);
                client.Authenticate("SMTP_Injection", "API_KEY");
                client.Send(emailMessage);
                client.Disconnect(true);
            }
        }
    }
}