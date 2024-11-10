export interface MenuItem {
    dishName: string;
    description: string;
    price: number;
    course: string;
  }
  
  export const courses: string[] = ["starter", "main", "dessert"];
  export const menuItems: MenuItem[] = [];
  
  export function calculateAveragePrice(course: string) {
    let total = 0;
    let count = 0;
    let i = 0;
  
    while (i < menuItems.length) {
      if (menuItems[i].course === course) {
        total += menuItems[i].price;
        count++;
      }
      i++;
    }
  
    return count > 0 ? (total / count).toFixed(2) : "N/A";
  }
  
  export function addMenuItem(newItem: MenuItem) {
    menuItems.push(newItem);
  }
  
  export function ClearMenuItems() {
    menuItems.splice(0,menuItems.length);
  }
  
  export function filterMenuItems(course: string):MenuItem[] {
    return menuItems.filter(item => item.course === course);
  }
   
  