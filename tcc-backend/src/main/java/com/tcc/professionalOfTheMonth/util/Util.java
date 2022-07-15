package com.tcc.professionalOfTheMonth.util;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;

public final class Util {
	
	public static final String PATH_PROJECT = System.getProperty("user.dir");
	
	public static final String PATH_IMAGES_PROJECT = System.getProperty("user.dir") + "\\images";
	
	public static String assembleHtmlEmail(String name, String email, String password) {
		
		StringBuilder htmlEmail = new StringBuilder();
		
		htmlEmail.append(" 	<div style=\"display: grid; justify-content: center; align-items: center; width: 100vw;\">                    		                  	  ");                                                                                        	
		htmlEmail.append(" 		<div style=\"font-size: 20px;                                                                                      		              					  ");
		htmlEmail.append(" 			margin:100px 0;                                                                                           		                      				  ");
		htmlEmail.append(" 			width:770px;                                                                                           		                      				  ");
		htmlEmail.append(" 			height:auto;	                                                                                           		                      				  ");
		htmlEmail.append(" 			background-color: #A9A9A9;                                                                             		                      					  ");
		htmlEmail.append(" 			border: solid 5px;\"                                                                                                              					  ");
		htmlEmail.append(" 		>                                                                                                                                     					  ");
		htmlEmail.append(" 			<h1 style=\"display: flex; text-align: center;justify-content: center; font-size: 35px; margin: 15px;\">🏆Professional of the Month - NEW USER🏆</h1> ");
		htmlEmail.append(" 			<div style=\"padding: 3px; border-top: solid 5px;\">                                                                                  		          ");
		htmlEmail.append(" 				<p style=\"margin:auto;\">Olá " + name + ", um novo usuário foi criado no nosso sistema você.</p>	     		          						  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\">Ótimo saber que você estará conosco! 😄</p>                                      		              					  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\">Entramos em contato com você pra te passar os dados de acesso ao sistema</p>     		              					  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\">Segue os dados para acessar nosso sistema:</p>                                   		              					  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\"><b>📰Email:</b> " + email + "</p>                                                		              					  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\"><b>🔑Senha (Gerada aleatóriamente): " + password + "</b></p>                     		              					  ");
		htmlEmail.append(" 				<p style=\"margin:auto;\">Esperamos poder contar com você!!</p>                                            		              					  ");
		htmlEmail.append(" 			</div>                                                                                                         		              					  ");
		htmlEmail.append(" 		</div>                                                                                                             		              					  ");
		htmlEmail.append(" 	</div>                                                                                                                                    					  ");
		
		return htmlEmail.toString();
	}
	
	public static String savePicture(String fileBase64, String fileName) {
		
		if(fileBase64 != null && !fileBase64.equals("") && fileName != null && !fileName.equals("")) {
			
			File imageFolder = new File(PATH_IMAGES_PROJECT);
			
			if(!imageFolder.exists()) {
				imageFolder.mkdir();
			}
			
			try (FileOutputStream imageOutputStream = new FileOutputStream(imageFolder +"\\" + fileName)){
				
				byte[] imageByteArray = Base64.getDecoder().decode(fileBase64);
				imageOutputStream.write(imageByteArray);
				
				return imageFolder +"\\" + fileName;
			}catch(Exception e) {
				e.printStackTrace();
				return null;
			}		
		}else {
			return null;
		}
	}
	
}
