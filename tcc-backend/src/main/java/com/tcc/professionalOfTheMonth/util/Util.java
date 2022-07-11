package com.tcc.professionalOfTheMonth.util;

public final class Util {
	
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
	
}
