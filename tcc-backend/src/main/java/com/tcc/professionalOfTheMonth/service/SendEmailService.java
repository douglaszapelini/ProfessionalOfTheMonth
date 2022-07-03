package com.tcc.professionalOfTheMonth.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SendEmailService {

	private final JavaMailSender javaMailSender;
	
	public SendEmailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendEmail(String to, String title, String content) {
		log.info("Starting send simple email...");
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(to);
		message.setSubject(title);
		message.setText(content);
		javaMailSender.send(message);
		log.info("Send finished!");
	}
	
}
