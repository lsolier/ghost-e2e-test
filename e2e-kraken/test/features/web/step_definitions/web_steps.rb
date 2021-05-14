if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
end

Then(/^I enter "([^\"]*)" into input field having name attribute "([^\"]*)"$/) do |text, selector|
  @driver.find_element(:name, selector).send_keys(text)
  sleep 2
end

Then(/^I click on element number "([^\"]*)" having css selector "([^\"]*)" of list having css selector "([^\"]*)"$/) do |indexItem ,itemSelector, listSelector|
  element = @driver.find_element(:css, listSelector)
  elements = element.find_elements(:css, itemSelector)
  elements[indexItem.to_i].click
  sleep 2
end

Then(/^I click on element having xpath "([^\"]*)"$/) do |xpath|
  @driver.find_element(:xpath, xpath).click
  sleep 2
 end

Then(/^I clean input field having css selector "([^\"]*)"$/) do |selector|
  @driver.find_element(:css, selector).clear()
  sleep 2
end

Then(/^I clean input field having name attribute "([^\"]*)"$/) do |selector|
  @driver.find_element(:name, selector).clear()
  sleep 2
end
