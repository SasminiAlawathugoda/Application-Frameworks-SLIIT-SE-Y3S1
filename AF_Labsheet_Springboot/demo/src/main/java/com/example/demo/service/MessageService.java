package com.example.demo.service;

import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Message;
import com.example.demo.repository.MessageRepository;


@Service
public class MessageService {
	
	@Autowired
	MessageRepository messageRepository ;
	
	public Message createMessage(Message message) {
		
		message.setId(UUID.randomUUID().toString());
		message.setDeleted(false);
		message.setCreatedAt(Calendar.getInstance().getTime());
		
		return messageRepository.save(message);
	}
	
	public Optional<Message> getMessage(String id){
		return messageRepository.findById(id);
	}

}
