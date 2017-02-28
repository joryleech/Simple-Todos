/**
 * Created by epita on 2/27/2017.
 */
import {Template} from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks:[
    {text: 'Task 1'},
    {text: 'Task 2'},
    {text: 'Task 3'}
  ]
});