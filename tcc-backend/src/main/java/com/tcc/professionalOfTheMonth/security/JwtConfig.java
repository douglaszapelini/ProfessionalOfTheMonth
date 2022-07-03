package com.tcc.professionalOfTheMonth.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.tcc.professionalOfTheMonth.service.DetailUserServiceImpl;

@EnableWebSecurity
public class JwtConfig extends WebSecurityConfigurerAdapter{

	private final DetailUserServiceImpl detailUserServiceImpl;
	private final PasswordEncoder passwordEncoder;
	
	public JwtConfig(DetailUserServiceImpl detailUserServiceImpl, PasswordEncoder passwordEncoder) {
		this.detailUserServiceImpl = detailUserServiceImpl;
		this.passwordEncoder = passwordEncoder;
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(detailUserServiceImpl).passwordEncoder(passwordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeHttpRequests().antMatchers(HttpMethod.POST, "/login").permitAll().anyRequest().authenticated()
			.and().addFilter(new JwtAuthFilter(authenticationManager()))
			.addFilter(new JwtValidateFilter(authenticationManager()))
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConfiguration = new CorsConfiguration().applyPermitDefaultValues();
		
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfiguration);
		return source;
	}
}
