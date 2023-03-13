package com.example.etms.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "task")
//@JsonIgnoreProperties({"project","emp"})
public class Task {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Id
	@Column(name = "t_id")
	private int tId ;
	@Column(name = "t_name")
	private String tName;
	@Column(name = "t_desc")
	private String tDesc;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "t_assignDate")
	private Date tAssignDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "t_endDate")
	private Date tEndDate;
	@Column(name = "t_approvalStatus")
	private String approvalStatus;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "t_acceptDate")
	private Date tAcceptDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "t_submittedDate")
	private Date tSubmittedDate;
	@Column(name = "t_submissionStatus")
	private String tSubmissionStatus;
	@Column(name = "t_report")
	private String tReport;
	private String remark;
	@Column(name = "t_status")
	private String tStatus;
	@ManyToOne
	@JoinColumn(name =  "p_id")
	private Project project ;
	@ManyToOne
	@JoinColumn(name =  "emp_id")
	private Employee emp;
	public Task() {
	}
	public Task(int tId, String tName, String tDesc, Date tAssignDate, Date tEndDate, String approvalStatus,
			Date tAcceptDate, Date tSubmittedDate, String tSubmissionStatus, String tReport, String remark,
			String tStatus, Project project, Employee emp) {
		
		this.tId = tId;
		this.tName = tName;
		this.tDesc = tDesc;
		this.tAssignDate = tAssignDate;
		this.tEndDate = tEndDate;
		this.approvalStatus = approvalStatus;
		this.tAcceptDate = tAcceptDate;
		this.tSubmittedDate = tSubmittedDate;
		this.tSubmissionStatus = tSubmissionStatus;
		this.tReport = tReport;
		this.remark = remark;
		this.tStatus = tStatus;
		this.project = project;
		this.emp = emp;
	}
	public int gettId() {
		return tId;
	}
	public void settId(int tId) {
		this.tId = tId;
	}
	public String gettName() {
		return tName;
	}
	public void settName(String tName) {
		this.tName = tName;
	}
	public String gettDesc() {
		return tDesc;
	}
	public void settDesc(String tDesc) {
		this.tDesc = tDesc;
	}
	public Date gettAssignDate() {
		return tAssignDate;
	}
	public void settAssignDate(Date tAssignDate) {
		this.tAssignDate = tAssignDate;
	}
	public Date gettEndDate() {
		return tEndDate;
	}
	public void settEndDate(Date tEndDate) {
		this.tEndDate = tEndDate;
	}
	public String getApprovalStatus() {
		return approvalStatus;
	}
	public void setApprovalStatus(String approvalStatus) {
		this.approvalStatus = approvalStatus;
	}
	public Date gettAcceptDate() {
		return tAcceptDate;
	}
	public void settAcceptDate(Date tAcceptDate) {
		this.tAcceptDate = tAcceptDate;
	}
	public Date gettSubmittedDate() {
		return tSubmittedDate;
	}
	public void settSubmittedDate(Date date) {
		this.tSubmittedDate = date;
	}
	public String gettSubmissionStatus() {
		return tSubmissionStatus;
	}
	public void settSubmissionStatus(String tSubmissionStatus) {
		this.tSubmissionStatus = tSubmissionStatus;
	}
	public String getTReport() {
		return tReport;
	}
	public void setTReport(String t_report) {
		this.tReport = t_report;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String gettStatus() {
		return tStatus;
	}
	public void settStatus(String tStatus) {
		this.tStatus = tStatus;
	}
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	public Employee getEmp() {
		return emp;
	}
	public void setEmp(Employee emp) {
		this.emp = emp;
	}
	@Override
	public String toString() {
		return "Task [tId=" + tId + ", tName=" + tName + ", tDesc=" + tDesc + ", tAssignDate=" + tAssignDate
				+ ", tEndDate=" + tEndDate + ", approvalStatus=" + approvalStatus + ", tAcceptDate=" + tAcceptDate
				+ ", tSubmittedDate=" + tSubmittedDate + ", tSubmissionStatus=" + tSubmissionStatus + ", tReport="
				+ tReport + ", remark=" + remark + ", tStatus=" + tStatus + ", project=" + project + ", emp=" + emp
				+ "]";
	}
	
	
	
	
}
