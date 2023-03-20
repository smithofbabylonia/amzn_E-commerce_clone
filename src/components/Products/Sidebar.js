function Sidebar(){
    return(
        <ul>
  <li>Item 1
    <ul>
      <li><label><input type="checkbox" name="item1-subitem1"/> Sub-item 1</label></li>
      <li><label><input type="checkbox" name="item1-subitem2"/> Sub-item 2</label></li>
    </ul>
  </li>
  <li>Item 2
    <ul>
      <li><label><input type="checkbox" name="item2-subitem1"/> Sub-item 3</label></li>
      <li><label><input type="checkbox" name="item2-subitem2"/> Sub-item 4</label></li>
    </ul>
  </li>
  <li>Item 3
    <ul>
      <li><label><input type="checkbox" name="item3-subitem1"/> Sub-item 5</label></li>
      <li><label><input type="checkbox" name="item3-subitem2"/> Sub-item 6</label></li>
    </ul>
  </li>
  <li>Item 4
    <ul>
      <li><label><input type="checkbox" name="item4-subitem1"/> Sub-item 7</label></li>
      <li><label><input type="checkbox" name="item4-subitem2"/> Sub-item 8</label></li>
    </ul>
  </li>
  <li>Item 5
    <ul>
      <li><label><input type="checkbox" name="item5-subitem1"/> Sub-item 9</label></li>
      <li><label><input type="checkbox" name="item5-subitem2"/> Sub-item 10</label></li>
    </ul>
  </li>
</ul>

    );
}

export default Sidebar;