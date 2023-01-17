from selenium import webdriver
from selenium.webdriver.common.by import By

chrome = webdriver.Chrome()

def scrape(url):
    chrome.get(url)
    lists = []
    for post in chrome.find_elements(By.CLASS_NAME, "col-md-4"):
      item = {}
      item["title"] = post.find_element(By.CLASS_NAME, 'entry-title').find_element(By.TAG_NAME, 'a').get_attribute('innerHTML')
      item["link"] = post.find_element(By.CLASS_NAME, 'entry-title').find_element(By.TAG_NAME, 'a').get_attribute('href')
      lists.append(item)
    return lists

print(scrape('https://diolinux.com.br/'))