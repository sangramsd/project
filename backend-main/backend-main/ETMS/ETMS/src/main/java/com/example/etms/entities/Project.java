package com.example.etms.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "project")
@JsonIgnoreProperties({"projectTaskList"})
public class Project {
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Id
	@Column(name = "p_id")
	private int pId;
	@Column(name = "p_name")
	private String pName;
	@Column(name = "p_desc") 	
	private String pDesc;
	@Column(name = "p_createdBy")
	private String pCreatedBy;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "p_startDate")
	private Date pStartDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "p_endDate")
	private Date pEndDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE) 
	@Column(name = "p_submittedDate")
	private Date pSubmittedDate;
	@Column(name = "p_progress")
	private String pProgress;
	@Column(name = "p_report")
	private String pReport;
	@Column(name = "p_status")
	private String status ;
	@ManyToOne
	@JoinColumn(name =  "c_id")
	private Client client ;
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	private List<Task> projectTaskList;
	
	public Project() {
	}

	public Project(int pId, String pName, String pDesc, String pCreatedBy, Date pStartDate, Date pEndDate,
			Date pSubmittedDate, String pProgress, String pReport, String Status, Client client,
			List<Task> projectTaskList) {
		
		this.pId = pId;
		this.pName = pName;
		this.pDesc = pDesc;
		this.pCreatedBy = pCreatedBy;
		this.pStartDate = pStartDate;
		this.pEndDate = pEndDate;
		this.pSubmittedDate = pSubmittedDate;
		this.pProgress = pProgress;
		this.pReport = pReport;
		this.status = Status;
		this.client = client;
		this.projectTaskList = projectTaskList;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public String getpDesc() {
		return pDesc;
	}

	public void setpDesc(String pDesc) {
		this.pDesc = pDesc;
	}

	public String getpCreatedBy() {
		return pCreatedBy;
	}

	public void setpCreatedBy(String pCreatedBy) {
		this.pCreatedBy = pCreatedBy;
	}

	public Date getpStartDate() {
		return pStartDate;
	}

	public void setpStartDate(Date pStartDate) {
		this.pStartDate = pStartDate;
	}

	public Date getpEndDate() {
		return pEndDate;
	}

	public void setpEndDate(Date pEndDate) {
		this.pEndDate = pEndDate;
	}

	public Date getpSubmittedDate() {
		return pSubmittedDate;
	}

	public void setpSubmittedDate(Date pSubmittedDate) {
		this.pSubmittedDate = pSubmittedDate;
	}

	public String getpProgress() {
		return pProgress;
	}

	public void setpProgress(String pProgress) {
		this.pProgress = pProgress;
	}

	public String getpReport() {
		return pReport;
	}

	public void setpReport(String pReport) {
		this.pReport = pReport;
	}

	public String getpStatus() {
		return status;
	}

	public void setpStatus(String status) {
		this.status = status;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public List<Task> getProjectTaskList() {
		return projectTaskList;
	}

	public void setProjectTaskList(List<Task> projectTaskList) {
		this.projectTaskList = projectTaskList;
	}

	@Override
	public String toString() {
		return "Project [pId=" + pId + ", pName=" + pName + ", pDesc=" + pDesc + ", pCreatedBy=" + pCreatedBy
				+ ", pStartDate=" + pStartDate + ", pEndDate=" + pEndDate + ", pSubmittedDate=" + pSubmittedDate
				+ ", pProgress=" + pProgress + ", pReport=" + pReport + ", status=" + status + ", client=" + client
				+ "]";
	}
}
