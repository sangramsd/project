package com.example.etms.controller;


import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.etms.entities.Department;
import com.example.etms.entities.Employee;
import com.example.etms.entities.Project;
import com.example.etms.entities.Task;
import com.example.etms.models.Response;
import com.example.etms.service.EmployeeService;
import com.example.etms.utils.StorageService;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class EmployeeControllerImpl {
	@Autowired
	private EmployeeService empService;
	@Autowired
	private StorageService storageService;
	
	@RequestMapping("/signin")
	public ResponseEntity<?>  login (@RequestParam("email") String email,  @RequestParam("password") String password) {
		Employee emp = empService.authenticate(email,  password);
		if (emp != null) {
			System.out.println("inside Authenticate =>" +emp.toString());
			return Response.success(emp);
		}
		return Response.error(null);
	}
	
	@RequestMapping("/signup") 
	public ResponseEntity<?> signup ( @ModelAttribute Employee emp ) {
		try {
			System.out.println("Date==> "+emp.toString());
			empService.save(emp);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	@RequestMapping("/profile") 
	public ResponseEntity<?> profile ( @ModelAttribute Employee empReq) {
		System.out.println("Data==> "+empReq.toString());
		try {
			Employee emp = empService.update(empReq);
			System.out.println("Resp ==> "+empReq.toString());
			return Response.success(emp);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	@RequestMapping("/profilepicture") 
	public ResponseEntity<?> profilePicture (@RequestParam("email") String email, @RequestParam("profilePic") MultipartFile file ) {
		System.out.println("email ==> "+email);
		try {
			String store = storageService.store(file);
			if (store != null) {
					Employee emp = empService.updateProfilePicture(email, store);
					System.out.println("Resp ==> "+emp.toString());
			return Response.success(emp);
			}
			return Response.error(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/forgetPassword")
	public ResponseEntity<?> changePassword ( @ModelAttribute Employee emp ) {
			Employee e = empService.forgetPassword(emp);
			if (e != null )
				return Response.success(null);
		return Response.error(null);
	}
	
	@RequestMapping(value="/{fileName}", produces = "image/*")
	public void download(@PathVariable("fileName") String fileName, HttpServletResponse resp) {
		System.out.println("Loading file: " + fileName);
		Resource resource = storageService.load(fileName);
		if(resource != null) {
			try(InputStream in = resource.getInputStream()) {
				ServletOutputStream out = resp.getOutputStream();
				FileCopyUtils.copy(in, out);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	@RequestMapping("/getemployees")
	public ResponseEntity<?>  getEmployees (@RequestParam("designation") String desi, @RequestParam("managerId") int mid) {
		System.out.println("inside Employee desig +++"+desi+ "  man id :" +mid);
		if  (desi.equals("admin")) {
			System.out.println("in if condn");
					List<Employee> list = empService.findAll();
					if (list != null) 
							return Response.success(list);
					else 
							return Response.error(list);
		}else {
			System.out.println("in ELSE condn");
					List<Employee> list = empService.findByManagerId(mid);
					if (list != null) 
						return Response.success(list);
				else 
						return Response.error(list);
			}	
	}
}
