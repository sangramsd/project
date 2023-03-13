package com.example.etms.filters;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;

import com.example.etms.models.Response;

//@Component
//@WebFilter(value="/*")
public class SecurityFilter implements Filter {
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println("SecurityFilter.init() called.");
	}
	
	@Override
	public void destroy() {
		System.out.println("SecurityFilter.destroy() called.");
	}
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;
		String curPath = request.getServletPath();
		System.out.println("SecurityFilter.doFilter() called: " + curPath);
		String role = "ABC";
		HttpSession session = request.getSession();
		Integer cid = (Integer) session.getAttribute("eid");
		List<String> paths = new ArrayList<String>();
		Collections.addAll(paths, "/dashboard/home", "/logout", "/details", "/admin/getcount");
		
		List<String> Adminpaths = new ArrayList<String>();
		Collections.addAll(Adminpaths, "/vendorlist", "/addvendor", "/signup", "/deleteVendor", "/editVendor","/update", "/register.jsp", "/vendorlist.jsp", "/updateVendor.jsp");
		if(paths.contains(curPath)) {
			if(cid == null) {
//				response.sendRedirect("login");
				System.out.println("in filter cid == null ");
			Response.error(null);
			}else
				System.out.println("in filter cid ==  "+cid);
				chain.doFilter(req, resp); 
		}
		else if (Adminpaths.contains(curPath)) {
			if (cid != null) 
				role = (String) session.getAttribute("role") ;
			if( role.equals("admin") ) {
				chain.doFilter(req, resp);	
			} else
				response.sendRedirect("login");
		}
		else
			chain.doFilter(req, resp); 

	}
}