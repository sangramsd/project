package com.example.etms.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "client")
@JsonIgnoreProperties({"projectList"})
public class Client {
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Id
	@Column(name = "c_id")
	private int cId;
	@Column(name = "c_Name")
	private String cName;
	@Column(name = "c_Company")
	private String cCompany;
	@Column(name = "c_email")
	private String cEmail;
	@Column(name = "c_contact")
	private String cContact;
	@Column(name = "c_location")
	private String cLocation;
	@OneToMany(mappedBy = "client")
	private List<Project> projectList;
	public Client() {
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public String getcCompany() {
		return cCompany;
	}
	public void setcCompany(String cCompany) {
		this.cCompany = cCompany;
	}
	public String getcEmail() {
		return cEmail;
	}
	public void setcEmail(String cEmail) {
		this.cEmail = cEmail;
	}
	public String getcContact() {
		return cContact;
	}
	public void setcContact(String cContact) {
		this.cContact = cContact;
	}
	public String getcLocation() {
		return cLocation;
	}
	public void setcLocation(String cLocation) {
		this.cLocation = cLocation;
	}
	public List<Project> getProjectList() {
		return projectList;
	}
	public void setProjectList(List<Project> projectList) {
		this.projectList = projectList;
	}
	@Override
	public String toString() {
		return "Client [cId=" + cId + ", cName=" + cName + ", cCompany=" + cCompany + ", cEmail=" + cEmail
				+ ", cContact=" + cContact + ", cLocation=" + cLocation + "]";
	}
}
