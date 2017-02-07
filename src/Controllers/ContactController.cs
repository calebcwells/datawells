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
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress(contact.Name, String.IsNullOrEmpty(contact.Email) ? contact.Email : "calebcwells@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("Caleb Wells", "calebcwells@gmail.com"));
            emailMessage.Subject = "[DataWells] - Contact from " + contact.Name;
            emailMessage.Body = new TextPart("plain") { Text = contact.Message };

            //using (var client = new SmtpClient())
            //{
            //    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTlsWhenAvailable);
            //    client.AuthenticationMechanisms.Remove("XOAUTH2");
            //    client.Send(emailMessage);
            //    client.Disconnect(true);
            //}
        }
    }
}