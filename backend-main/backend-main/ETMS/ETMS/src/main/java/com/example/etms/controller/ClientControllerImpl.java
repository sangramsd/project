package com.example.etms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.etms.entities.Client;
import com.example.etms.models.Response;
import com.example.etms.service.ClientService;

@CrossOrigin
@RequestMapping("/admin")
@RestController
public class ClientControllerImpl {
	@Autowired
	private ClientService clientService;

	@RequestMapping("/addclient")
	public ResponseEntity<?>  addClient (@ModelAttribute Client client) {
		try {
			System.out.println("client ==>"+client);
			clientService.save(client);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/getclient")
	public ResponseEntity<?>  getClient () {
		List<Client> list = clientService.findAll();
		if (list != null) {
			System.out.println("client  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(list);
	}
	
	@RequestMapping("/editclient") 
	public ResponseEntity<?>  editClient ( @ModelAttribute Client client) {
		System.out.println("Data==> "+client.toString());
		try {
			Client cli = clientService.update(client);
			System.out.println("Resp ==> "+client.toString());
			return Response.success(cli);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
}
