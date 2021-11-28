from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
import requests

driver = webdriver.Chrome(executable_path=r'./chromedriver')
driver.get("https://web.whatsapp.com/")
time.sleep(10)

def bot():
    try: 
        #VEFIFICA A NOTIFICAÇÃO DA MENSAGEM
        bolinha = driver.find_element_by_class_name('_23LrM')
        bolinha = driver.find_elements_by_class_name('_23LrM')
        clica_bolinha = bolinha[-1]
        acao_bolinha = webdriver.common.action_chains.ActionChains(driver)
        acao_bolinha.move_to_element_with_offset(clica_bolinha,0,-20)
        acao_bolinha.click()
        acao_bolinha.perform()
        acao_bolinha.click()
        acao_bolinha.perform()
        #CAPTURA O TELEFONE DO CLIENTE
        telefone_cliente = driver.find_element_by_xpath('//*[@id="main"]/header/div[2]/div/div/span')
        telefone_final = telefone_cliente.text
        print(telefone_final)
        #CAPTURA A ÚLTIMA MENSAGEM DO CLIENTE
        todas_as_msg = driver.find_elements_by_class_name('_1Gy50')
        todas_as_msg_texto = [e.text for e in todas_as_msg]
        msg =  todas_as_msg_texto[-1]
        print(msg)
        #RESPONDE A MENSAGEM
        campo_de_texto = driver.find_element_by_xpath('//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[2]')
        campo_de_texto.click()
        resposta = requests.get('http://localhost/bot_php/index.php')
        bot_resposta = resposta.text
        time.sleep(3)
        campo_de_texto.send_keys(bot_resposta, Keys.ENTER)
        #VOLTAR AO PADRÃO PARA RECEBER NOVAS NOTIFICAÇÕES
        
        contato_padrao = driver.find_element_by_xpath("//*[@id='pane-side']/div[1]/div/div/div[11]/div/div/div[2]/div[2]/div[2]/span[1]/div/span")
        acao_contato = webdriver.common.action_chains.ActionChains(driver)
        acao_bolinha.move_to_element_with_offset(contato_padrao,0,-20)
        acao_contato.click()
        acao_contato.perform()
        acao_contato.click()
        acao_contato.perform()

    except:
        print('Buscando Novas mensagens')
        time.sleep(3) 

while True:
    bot()