from selenium import webdriver
from selenium.webdriver.common.by import By

chrome = webdriver.Chrome()

chrome.get('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')

paragraphs = chrome.find_elements(By.TAG_NAME, 'p')

for paragraph in paragraphs:
    print(paragraph.text)