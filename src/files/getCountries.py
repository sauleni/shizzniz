import requests
from bs4 import BeautifulSoup

if __name__ == "__main__":
    page = requests.get("https://www.nationsonline.org/oneworld/countries_of_the_world.htm")
    soup = BeautifulSoup(page.text, "html.parser")
    
    list1 = soup.findAll("td", {'class': 'tdx'})
    list2 = soup.findAll("td", {'class': 'tdb'})
    contents = list1 + list2
    countries = []
    for content in contents:
        try:
            country = content.find("a")
            if country.text:
                print(country.text)
                countries.append(country.text)
            
            if  "Zimbabwe" in country.text:
                print("Total:", len(countries))
                break
        except:
            pass
