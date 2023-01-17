from selenium import webdriver
from selenium.webdriver.common.by import By


chrome = webdriver.Chrome()

chrome.get('https://quotes.toscrape.com/')

phrase = chrome.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

print(phrase)