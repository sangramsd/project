package com.example.etms.service;

import java.util.List;

import com.example.etms.entities.Employee;

public interface EmployeeService {
	List<Employee>  findAll();
	List<Employee>  findByManagerId(int mid);
	Employee findByEmail(String email);
	List<Employee> findByDepartment(int deptId);
	Employee authenticate(String email, String password);
	Employee save(Employee emp);
	Employee update(Employee emp);
	Employee forgetPassword (Employee emp);
	Employee updateProfilePicture(String email, String file);
}
