import smtplib,ssl
from email.message import EmailMessage
import traceback
class EmailNotifier:
    
    def __init__(self) -> None:
        pass
    
    def simpleNotification(self,subject,body):
        port = 587  # For starttls
        smtp_server = "smtp.gmail.com"
        sender_email = "kangkan.dc1@gmail.com"
        receiver_email = "kangkan.dc1@gmail.com"
        password = "lizlieooojggyqxp"
        
        message=EmailMessage()
        message["Subject"]=subject
        message.set_content(body)
        
        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message.as_string())
        
        
    
    def notifyStaticExportExceptionByEmail(self):
        port = 587  # For starttls
        smtp_server = "smtp.gmail.com"
        sender_email = "kangkan.dc1@gmail.com"
        receiver_email = "kangkan.dc1@gmail.com"
        password = "lizlieooojggyqxp"
        message = """\
        Subject: Exception at GTFS Static Export Script

        Exception at GTFS static export script."""

        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)
            
            
    def notifyRealtimeParsingExceptionByEmail(self):
        port = 587  # For starttls
        smtp_server = "smtp.gmail.com"
        sender_email = "kangkan.dc1@gmail.com"
        receiver_email = "kangkan.dc1@gmail.com"
        password = "lizlieooojggyqxp"
        message = """\
        Subject: Exception at GTFS RT Parsing  Script

        Exception at GTFS RT Parsing Script."""

        context = ssl.create_default_context()
        with smtplib.SMTP(smtp_server, port) as server:
            server.ehlo()  # Can be omitted
            server.starttls(context=context)
            server.ehlo()  # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)        
            
            