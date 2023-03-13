package com.example.etms.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.etms.daos.ClientDao;
import com.example.etms.entities.Client;

@Transactional
@Service
public class ClientServiceImpl implements ClientService {
	@Autowired
	public ClientDao clientDao;

	@Override
	public Client save(Client client) {
		return clientDao.save(client);
	}

	@Override
	public Client update(Client client) {
		Client cli = findById(client.getcId());
		cli.setcName(client.getcName());
		cli.setcCompany(client.getcCompany());
		cli.setcEmail(client.getcEmail());
		cli.setcContact(client.getcContact());
		cli.setcLocation(client.getcLocation());
		return  clientDao.save(cli);
	}

	@Override
	public Client findById(int id) {
		Optional<Client> client = clientDao.findById(id);
		return client.orElse(null);
	}

	@Override
	public boolean delete(int client) {
		 try {
			clientDao.deleteById(client);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public List<Client> findAll() {
		return clientDao.findAll();
	}

}
