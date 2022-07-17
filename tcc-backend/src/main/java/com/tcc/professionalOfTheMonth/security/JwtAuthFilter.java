package com.tcc.professionalOfTheMonth.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tcc.professionalOfTheMonth.data.DetailUserData;
import com.tcc.professionalOfTheMonth.domains.User;

public class JwtAuthFilter extends UsernamePasswordAuthenticationFilter{
	
	public static final int TOKEN_EXPIRATION = 14_400_000;
	public static final String TOKEN_PASSWORD = "b63390c8-ff48-4e4e-8469-1e6b4cb08264";
	
	private final AuthenticationManager authenticationManager;
	
	public JwtAuthFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		
		try {
			User user = new ObjectMapper().readValue(request.getInputStream(), User.class);
			
			return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					user.getEmail(), 
					user.getPassword(), 
					new ArrayList<>()
			));
		} catch (Exception e) {
			throw new RuntimeException("Failed to authenticate user", e);
		}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, 
											HttpServletResponse response, 
											FilterChain chain, 
											Authentication authResult) throws IOException, ServletException {
		DetailUserData userData = (DetailUserData) authResult.getPrincipal();
		
		String token = JWT.create().
				withSubject(userData.getUsername()).
				withExpiresAt(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION)).
				sign(Algorithm.HMAC512(TOKEN_PASSWORD));
		
		response.getWriter().write(token);
		response.getWriter().write("\n" + userData.getUsername());
		response.getWriter().write("\n" + new Date(System.currentTimeMillis() + TOKEN_EXPIRATION).toString());
		response.getWriter().flush();
				
	}
}
