# Learning data.table (3)




<div id="whats-key" class="section level1">
<h1>What’s key</h1>
<p>Key is very similar to the group_by concept, or the telephone number book in our world: when you want to find someone’s phone number, you go find his/her first name, then second name. The names here are key.</p>
<p>Or as the data.table vignette shows, the <code>key</code> in data.table is inherited from <code>rowname</code> in data.frame. However, <code>key</code> is advantageous in</p>
<ul>
<li>each row can have many keys in dt, but only one rowname in df</li>
<li>keys are not unique (you can have duplicate variable in key column)</li>
<li>keys can be in various variable types</li>
<li>key columns are well sorted</li>
</ul>
</div>
<div id="how-to-set-key" class="section level1">
<h1>How to set key</h1>
<p>setkey() or setkeyv(): the former one is better in interactive use, whilst the latter one is more of function-use.</p>
<pre class="r"><code>setkey(flights, origin, dest)
#is equal to
setkeyv(flights, c(&quot;origin&quot;, &quot;dest&quot;))</code></pre>
</div>
<div id="feature-of-using-key" class="section level1">
<h1>Feature of using key</h1>
<ul>
<li>it modify data.table and return result invisibly</li>
<li>it’s manipulating by reference as <code>:=</code> operator and all <code>set*</code> family function (setkey, setname etc.)</li>
</ul>
</div>
<div id="do-some-work" class="section level1">
<h1>Do some work</h1>
<pre class="r"><code>setkey(flights, origin, dest)
# select j
flights[.(&quot;LGA&quot;, &quot;TPA&quot;), .(arr_delay)]

# do sth in j
flights[.(&quot;LGA&quot;, &quot;TPA&quot;), max(arr_delay)]

# use by
flights[&quot;JFK&quot;, max(dep_delay), keyby = month]</code></pre>
</div>
<div id="mult-and-nomatch-argument" class="section level1">
<h1><code>mult</code> and <code>nomatch</code> argument</h1>
<p>Very simply, <code>mult</code> choose how many matching rows to return, and <code>nomatch</code> selects if the unmatching NA should be returned or skipped.</p>
<p>The default value of these two are “all” and “NA”. Setting <code>nomatch=NULL</code> kips queries with no matches.</p>
</div>
<div id="ad-of-using-key" class="section level1">
<h1>Ad of using key</h1>
<p>Key is based on binary search (二分法) with O(Log(N)) complexity, while the traditional vector scan method is simply scaning as the name shows. The complexity is O(N).</p>
<p>But the document says the vector scan has been optimized in recent version thus is also binary search-based, otherwise you set the key to <code>NULL</code> and then it’s back to the slow one.</p>
</div>


---

> Author: Rui Ying  
> URL: /2021-04-29-learning-data-table-3/  

