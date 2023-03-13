package com.example.etms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.etms.entities.Client;
import com.example.etms.entities.Project;
import com.example.etms.models.Count;
import com.example.etms.models.Response;
import com.example.etms.service.ProjectService;
import com.example.etms.service.TaskService;


@CrossOrigin
@RequestMapping("/admin")
@RestController
public class ProjectControllerImpl {
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private TaskService taskService;
	
	@RequestMapping("/addproject")
	public ResponseEntity<?>  addProject (@ModelAttribute Project pro) {
		System.out.println("pro REQ  1==>"+pro);
		try {
			System.out.println("pro REQ  2==>"+pro);
			projectService.save(pro);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/getprojects")
	public ResponseEntity<?>  getProject () {
		System.out.println("inside project");
		List<Project> list = projectService.findAll();
		if (list != null) {
			System.out.println("project LIST  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(list);
	}
	@RequestMapping("/ongoningprojects")
	public ResponseEntity<?>  ongonigProject () {
		System.out.println("inside project");
		List<Project> list = projectService.findByStatus("on going");
		if (list != null) {
			System.out.println("project LIST  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(list);
	}
	
	@RequestMapping("/editproject") 
	public ResponseEntity<?>  editProject ( @ModelAttribute Project project) {
		System.out.println("in edit project==> "+project.toString());
		try {
			Project pro = projectService.update(project);
			System.out.println("Resp ==> "+pro.toString());
			return Response.success(pro);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	@RequestMapping("/getcount") 
	public ResponseEntity<?>  getCount () {
		System.out.println("inside getcount");
		Count count = new Count();
		count.setAllProject(projectService.countall()) ;
		count.setOngonigProject(projectService.countByStatus("on going"));
		count.setAllTask(taskService.countall());
		count.setAcceptedTask(taskService.countByApprovalStatus("accepted"));
		count.setRejectedTask(taskService.countByApprovalStatus("rejected"));
		count.setWaitingTask(taskService.countByApprovalStatus("waiting"));
		if (count !=  null) {
			System.out.println("project LIST  =>" +count.toString());
			return Response.success(count);
		}
		return Response.error(null);
	}
}
