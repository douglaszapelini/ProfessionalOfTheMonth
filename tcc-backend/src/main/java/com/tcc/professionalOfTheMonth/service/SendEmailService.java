package com.tcc.professionalOfTheMonth.service;

import javax.mail.Address;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SendEmailService {

	private final JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String mail;
	
	public SendEmailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendSimpleEmail(String to, String title, String content) {
		log.info("Starting send simple email...");
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(title);
		message.setText(content);
		javaMailSender.send(message);
		log.info("Send finished!");
	}
	
	public void sendHtmlEmail(String to, String title, String content) throws MessagingException {
		
		log.info("Starting send HTML email...");
		
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);
		helper.setFrom(mail);
		helper.setSubject(title);
		helper.setText(content);
		helper.setTo(to);
		
		javaMailSender.send(message);
		log.info("Send finished!");
	}
	
}
