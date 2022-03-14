from threading import Timer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import time

driver = webdriver.Chrome(r'C:\chromedriver_win32\chromedriver.exe')
driver.maximize_window()

usernames = ["Lok", "Fanta", "Hurry"]
passwords = "munkhzorigo233"

for x in usernames:
    driver.execute_script("window.open('https://megamon.fun');")

time.sleep(15)
driver.switch_to.window(driver.window_handles[0])
driver.close()


for index, val in enumerate(usernames):
    driver.switch_to.window(driver.window_handles[index])

    time.sleep(1)
    login = driver.find_element_by_xpath(
        '//*[@id="rootUI"]/div/div/div/div[1]/div/div/div/div[1]/div/div/div[4]/div/div/div/div').click()

    time.sleep(1)

    username = driver.find_element_by_xpath(
        '//*[@id="rootUI"]/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div/div[1]/div[1]/div/div/input')
    username.send_keys(usernames[index])
    password = driver.find_element_by_name('password')
    password.send_keys(passwords, Keys.RETURN)


driver.quit()
