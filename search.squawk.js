/**
 * squawk -- Noise-as-a-service that attacks the ability to profile
 * at-risk groups through search histories.
 *
 * This script, upon detecting a button click, loads Google Search in
 * a new tab, and runs a number of searches.
 *
 * Copyright (C) 2016 Ben Dechrai
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
window.onload = function() {

  var squawkSearchStrings = [
    "how do I contact the guardian anonymously",
    "gay support services in Nigeria"
  ];

  function squawkSearch(position){
    console.log(position);
    squawkSearchTab = window.open('https://www.google.com/search?q='+ encodeURI(squawkSearchStrings[position]), 'squawkSearchTab');
    if(squawkSearchStrings.length > position+1) {
      setTimeout(function(){squawkSearch(position+1)},2000);
    }
  }

  document.getElementById('run').onclick = function(){
    squawkSearch(0);
  };

}
