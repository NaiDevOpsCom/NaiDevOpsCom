from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

def send_reset_token(username,token,receiver):
    # Creating message subject and sender
    subject = 'Password Reset'
    sender = 'noreply@developerske.com'

    #passing in the context vairables
    html_content = render_to_string('password_template/resetpassword.html',{"username": username,  "token":token})
    text_content = render_to_string('password_template/resetpassword.txt',{"username": username, "token":token})

    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()




def send_staff_credentials(username,password,receiver):
    # Creating message subject and sender
    subject = 'IMPORTANT: Afrikartdolly staff credentials'
    sender = 'noreply@afrikartdolly.com'

    #passing in the context vairables    
    html_content = render_to_string('newuser/credentials.html',{"username": username,  "password":password})
    text_content = render_to_string('newuser/credentials.txt',{"username": username, "password":password})

    msg = EmailMultiAlternatives(subject,text_content,sender,[receiver])
    msg.attach_alternative(html_content,'text/html')
    msg.send()


def send_bootcamp_message(name,message,email):
    # Creating message subject and sender
    subject = ' IMPORTANT: New Message'
    sender = email

    #passing in the context vairables    
    html_content = render_to_string('bootcamp/sendmessage.html',{"name": name,  "email": email, "message":message})
    text_content = render_to_string('bootcamp/sendmessage.txt',{"name": name, "email": email, "message":message})

    msg = EmailMultiAlternatives(subject,text_content,sender,["noreply@developerske.com"])
    msg.attach_alternative(html_content,'text/html')
    msg.send()

def send_message(name,message,email):
    # Creating message subject and sender
    subject = 'IMPORTANT: New Message'
    sender = email

    #passing in the context vairables    
    html_content = render_to_string('sendmessage/sendmessage.html',{"name": name,  "email": email, "message":message})
    text_content = render_to_string('sendmessage/sendmessage.txt',{"name": name, "email": email, "message":message})

    msg = EmailMultiAlternatives(subject,text_content,sender,["enquiries@afrikartdolly.com"])
    msg.attach_alternative(html_content,'text/html')
    msg.send()
  