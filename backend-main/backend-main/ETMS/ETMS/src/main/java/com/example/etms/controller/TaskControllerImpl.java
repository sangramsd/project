package com.example.etms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.etms.entities.Task;
import com.example.etms.models.Response;
import com.example.etms.service.TaskService;

@CrossOrigin
@RestController
public class TaskControllerImpl {
	@Autowired
	private TaskService taskService;

	@RequestMapping("/admin/addtask")
	public ResponseEntity<?>  addTask (@ModelAttribute Task task) {
		try {
			System.out.println("task ==>"+task);
			taskService.save(task);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/admin/gettask")
	public ResponseEntity<?>  getTask () {
		List<Task> list = taskService.findAll();
		if (list != null) {
			System.out.println("inside  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(list);
	}
	
	@RequestMapping("/admin/gettaskofProject")
	public ResponseEntity<?>  getTaskOfProject (@RequestParam("project") int pid) {
		System.out.println("in gettaskProj+++"+pid);
		List<Task> list = taskService.findByProject(pid);
		if (list != null) {
			System.out.println("inside T by Proj  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(list);
	}
	
	@RequestMapping("/admin/submittask")
	public ResponseEntity<?>  getSubmit (@ModelAttribute Task task) {
		try {
			System.out.println("task ==>"+task);
			taskService.update(task);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/user/acceptlist")
	public ResponseEntity<?>  acceptList (@RequestParam("empId") String empIdString ) {
		System.out.println("email get "+empIdString);
		int empId = Integer.parseInt(empIdString);
		List<Task> list = taskService.findByEmpAndApprovalStatus(empId, "waiting") ;
		if (list != null) {
			System.out.println("inside Accept List----  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(null);
	}
	
	@RequestMapping("/user/taskstatus")
	public ResponseEntity<?>  updateStatus (@ModelAttribute Task task) {
		try {
			System.out.println("in accept------>>>>>"+task.toString());
			taskService.updateStatus(task);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/user/gettask")
	public ResponseEntity<?>  getTask (@RequestParam("empId") int empid ) {
		List<Task> list = taskService.findByEmpAndApprovalStatus(empid, "accepted") ;
		if (list != null) {
			System.out.println("inside  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(null);
	}
	
	@RequestMapping("/admin/getrejecttask")
	public ResponseEntity<?>  getRejectTask (@RequestParam("empId") int empid ) {
		List<Task> list = taskService.findByApprovalStatus("rejected") ;
		if (list != null) {
			System.out.println("inside  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(null);
	}
	
	@RequestMapping("/admin/taskdelete")
	public ResponseEntity<?>  deleteTask (@RequestParam("tId") int taskId) {
		try {
			System.out.println("in deleteTask------>>>>>");
			taskService.delete(taskId);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	
	@RequestMapping("/admin/editttask")
	public ResponseEntity<?>  editTask (@ModelAttribute Task task) {
		try {
			System.out.println("task ==>"+task);
			taskService.editTask(task);
			return Response.success(null);
		} catch (Exception e) {
			e.printStackTrace();
			return Response.error(null);
		}
	}
	@RequestMapping("/admin/waitingtasklist")
	public ResponseEntity<?>  waitingList () {
		List<Task> list = taskService.findByApprovalStatus("waiting") ;
		if (list != null) {
			System.out.println("inside waiting List----  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(null);
	}
	@RequestMapping("/admin/accepttasklist")
	public ResponseEntity<?>  acceptList () {
		List<Task> list = taskService.findByApprovalStatus("accepted") ;
		if (list != null) {
			System.out.println("inside Accept List----  =>" +list.toString());
			return Response.success(list);
		}
		return Response.error(null);
	}
}
