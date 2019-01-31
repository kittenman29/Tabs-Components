
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tab-items[data-tab= '${this.data}]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelector('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    this.element = Array.from(links).forEach(link => {link.classList.add('tabs-link-selected')});

    // Add a class named "tabs-link-selected" to this link
    this.element = this.links.classList.remove('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.links.classList.toggle('tabs-link-selected');
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelector('.tab-items');

    // Remove the class "tabs-item-selected" from each element
    Array.from(links).forEach( links => this.links.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element = this.link.classlist.add('tab-link-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach( link => new TabLink(link));