package com.tcc.professionalOfTheMonth.util;

public final class Util {
	
	public static String assembleHtmlEmail(String name, String email, String password) {
		
		StringBuilder htmlEmail = new StringBuilder();
		
		htmlEmail.append(" <div style=\"background-color: #696969; margin: 0; padding: 0;\">                                                      		");
		htmlEmail.append("     <div style=\"display: grid; justify-content: center; align-items: center; border: solid 5px;\">                    		");
		htmlEmail.append("         <h1 style=\"display: grid; justify-content: center; font-size: 45px; margin: auto;\">NEW USER</h1>             		");
		htmlEmail.append("         <div style=\"display: grid; justify-content: center; align-items: center;\">             					  		");
		htmlEmail.append("         		<h2 style=\"display: flex; justify-content: center; margin-top: 0;\"><p>🏆Professional of the Month🏆</p></h2> 	");
		htmlEmail.append("         </div>                                                                                                              	");
		htmlEmail.append("     <div style=\"font-size: 20px;                                                                                      		");
		htmlEmail.append("                 margin:auto;                                                                                           		");
		htmlEmail.append("                 background-color: #A9A9A9;                                                                             		");
		htmlEmail.append("                 border: solid 5px;                                                                                     		");
		htmlEmail.append("                 border-top: 0px;\">                                                                                    		");
		htmlEmail.append("         <div style=\"padding: 3px;\">                                                                                  		");
		htmlEmail.append("             <p style=\"margin:auto;\">Olá " + name + ", um novo usuário foi criado no nosso sistema para você.</p>     		");
		htmlEmail.append("             <p style=\"margin:auto;\">Ótimo saber que você estará conosco! 😄</p>                                      		");
		htmlEmail.append("             <p style=\"margin:auto;\">Entramos em contato com você pra te passar os dados de acesso ao sistema</p>     		");
		htmlEmail.append("             <p style=\"margin:auto;\">Segue os dados para acessar nosso sistema:</p>                                   		");
		htmlEmail.append("             <p style=\"margin:auto;\"><b>📰Email:</b> " + email + "</p>                                                		");
		htmlEmail.append("             <p style=\"margin:auto;\"><b>🔑Senha (Gerada aleatóriamente): " + password + "</b></p>                     		");
		htmlEmail.append("             <p style=\"margin:auto;\">Esperamos poder contar com você!!</p>                                            		");
		htmlEmail.append("         </div>                                                                                                         		");
		htmlEmail.append("     </div>                                                                                                             		");
		htmlEmail.append(" </div>                                                                                                                 		");
		
		return htmlEmail.toString();
	}
	
}
