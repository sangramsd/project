package com.example.etms.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.etms.daos.EmployeeDao;
import com.example.etms.entities.Employee;
import com.example.etms.utils.StorageService;

@Transactional
@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	public EmployeeDao empDao;
	
	@Autowired
	private StorageService storageService;
	
	@Autowired
	public PasswordEncoder passwordEncoder;
	
	@Override
	public Employee authenticate(String email, String password) {
		Employee emp = findByEmail(email);
		if(emp != null && passwordEncoder.matches(password, emp.getPassword()) )
				return emp;
		return null;
	}

	@Override
	public Employee findByEmail(String email) {
		return empDao.findByEmail(email);
	}

	@Override
	public Employee save(Employee emp) {
		String encPass = passwordEncoder.encode( emp.getPassword());
		emp.setPassword(encPass);
		System.out.println("date ==>"+emp.getJoinDate());
		return empDao.save(emp);
	}

	@Override
	public Employee forgetPassword(Employee data) {
		Employee emp = findByEmail(data.getEmail());
		if ( data.getEmpId() == emp.getEmpId() && data.getSecurityQuestion().equals(emp.getSecurityQuestion() ) ){
			String encPass = passwordEncoder.encode( data.getPassword());
			emp.setPassword(encPass);
		    return empDao.save(emp);
		}
		return null;
	}

	@Override
	public Employee update(Employee data) {
		Employee emp = findByEmail(data.getEmail());
		emp.setFirstName(data.getFirstName());
		emp.setLastName(data.getLastName());
		emp.setEmail(data.getEmail());
		emp.setGender(data.getGender());
		emp.setContact(data.getContact());
		emp.setBirthDate(data.getBirthDate());
		emp.setAddress(data.getAddress());
		emp.setSecurityQuestion(data.getSecurityQuestion());
		return empDao.save(emp);
	}

	@Override
	public Employee updateProfilePicture(String email, String file) {
		Employee emp = findByEmail(email);
		if(emp.getProfilePicture() != null)
			storageService.delete(emp.getProfilePicture());
		emp.setProfilePicture(file);
		return empDao.save(emp);
	}

	@Override
	public List<Employee> findByDepartment(int deptId) {
		return empDao.findByDept(deptId);
	}

	@Override
	public List<Employee> findAll() {
		return empDao.findAll();
	}

	@Override
	public List<Employee> findByManagerId(int mid) {
		return empDao.findByManagerId(mid);
	}

}
