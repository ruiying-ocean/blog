# Learning data.table (1)




<div id="section-prepare-data" class="section level1">
<h1>Prepare data</h1>
<pre class="r"><code>library(data.table)
file_url &lt;- &#39;https://raw.githubusercontent.com/Rdatatable/data.table/master/vignettes/flights14.csv&#39;
df &lt;- fread(file_url)
head(df,3)</code></pre>
<pre><code>##    year month day dep_delay arr_delay carrier origin dest air_time distance
## 1: 2014     1   1        14        13      AA    JFK  LAX      359     2475
## 2: 2014     1   1        -3        13      AA    JFK  LAX      363     2475
## 3: 2014     1   1         2         9      AA    JFK  LAX      351     2475
##    hour
## 1:    9
## 2:   11
## 3:   19</code></pre>
</div>
<div id="section-simple-syntax" class="section level1">
<h1>Simple syntax</h1>
<p>data.table use one-line syntax like <code>df[i, j, by]</code> where <code>i</code> is the rows to select and to manipulate, <code>j</code> is the columns to select and how to manupulate it (e.g., mutate function in dplyr), <code>by</code> is the group option.</p>
</div>
<div id="section-subset-rows" class="section level1">
<h1>Subset rows</h1>
<pre class="r"><code>library(magrittr)
#using condition
sub_df &lt;-  df[year==2014 &amp; hour &lt; 10,]
head(sub_df)</code></pre>
<pre><code>##    year month day dep_delay arr_delay carrier origin dest air_time distance
## 1: 2014     1   1        14        13      AA    JFK  LAX      359     2475
## 2: 2014     1   1        -8       -26      AA    LGA  PBI      157     1035
## 3: 2014     1   1        -7        -6      AA    LGA  ORD      142      733
## 4: 2014     1   1        -7         0      AA    LGA  ORD      143      733
## 5: 2014     1   1        -8       -17      AA    LGA  ORD      139      733
## 6: 2014     1   1        -2        15      AA    LGA  ORD      145      733
##    hour
## 1:    9
## 2:    7
## 3:    5
## 4:    6
## 5:    6
## 6:    7</code></pre>
<pre class="r"><code>#using index (not recommended because of bad readability and maintainance)
sub_df &lt;-  df[1:5,]
head(sub_df)</code></pre>
<pre><code>##    year month day dep_delay arr_delay carrier origin dest air_time distance
## 1: 2014     1   1        14        13      AA    JFK  LAX      359     2475
## 2: 2014     1   1        -3        13      AA    JFK  LAX      363     2475
## 3: 2014     1   1         2         9      AA    JFK  LAX      351     2475
## 4: 2014     1   1        -8       -26      AA    LGA  PBI      157     1035
## 5: 2014     1   1         2         1      AA    JFK  LAX      350     2475
##    hour
## 1:    9
## 2:   11
## 3:   19
## 4:    7
## 5:   13</code></pre>
<pre class="r"><code>#i parameter can sort specific columns
df[order(hour,-distance)] %&gt;% head() #`-` means descend order</code></pre>
<pre><code>##    year month day dep_delay arr_delay carrier origin dest air_time distance
## 1: 2014     2  13       922       975      HA    JFK  HNL      659     4983
## 2: 2014     7   3       254       221      AA    JFK  SFO      341     2586
## 3: 2014     7  14       230       246      B6    JFK  SFO      335     2586
## 4: 2014     7  15       318       305      VX    JFK  SFO      343     2586
## 5: 2014     1   4       244       201      UA    EWR  SFO      352     2565
## 6: 2014     2   3       244       267      UA    EWR  SFO      395     2565
##    hour
## 1:    0
## 2:    0
## 3:    0
## 4:    0
## 5:    0
## 6:    0</code></pre>
</div>
<div id="section-subset-columns" class="section level1">
<h1>Subset columns</h1>
<pre class="r"><code>#using list
df[, .(dep_delay, arr_delay)]</code></pre>
<pre><code>##         dep_delay arr_delay
##      1:        14        13
##      2:        -3        13
##      3:         2         9
##      4:        -8       -26
##      5:         2         1
##     ---                    
## 253312:         1       -30
## 253313:        -5       -14
## 253314:        -8        16
## 253315:        -4        15
## 253316:        -5         1</code></pre>
<pre class="r"><code>#which is same as
df[, list(dep_delay, arr_delay)]</code></pre>
<pre><code>##         dep_delay arr_delay
##      1:        14        13
##      2:        -3        13
##      3:         2         9
##      4:        -8       -26
##      5:         2         1
##     ---                    
## 253312:         1       -30
## 253313:        -5       -14
## 253314:        -8        16
## 253315:        -4        15
## 253316:        -5         1</code></pre>
<pre class="r"><code># or 
df[, c(&quot;dep_delay&quot;, &quot;arr_delay&quot;)]</code></pre>
<pre><code>##         dep_delay arr_delay
##      1:        14        13
##      2:        -3        13
##      3:         2         9
##      4:        -8       -26
##      5:         2         1
##     ---                    
## 253312:         1       -30
## 253313:        -5       -14
## 253314:        -8        16
## 253315:        -4        15
## 253316:        -5         1</code></pre>
<pre class="r"><code># or 
list &lt;- c(&quot;dep_delay&quot;, &quot;arr_delay&quot;)
df[, ..list] #use .. here from the convention of unix directory operation</code></pre>
<pre><code>##         dep_delay arr_delay
##      1:        14        13
##      2:        -3        13
##      3:         2         9
##      4:        -8       -26
##      5:         2         1
##     ---                    
## 253312:         1       -30
## 253313:        -5       -14
## 253314:        -8        16
## 253315:        -4        15
## 253316:        -5         1</code></pre>
<pre class="r"><code>#but I understand in a better way: . means list, .. means defining and call this (two steps)

# parameter *with*
df[, list, with=FALSE]</code></pre>
<pre><code>##         dep_delay arr_delay
##      1:        14        13
##      2:        -3        13
##      3:         2         9
##      4:        -8       -26
##      5:         2         1
##     ---                    
## 253312:         1       -30
## 253313:        -5       -14
## 253314:        -8        16
## 253315:        -4        15
## 253316:        -5         1</code></pre>
<pre class="r"><code>#with() is a functional programming style so we can treat columns as variable. with=FALSE means restoring to data.frame manipulation. with=TRUE is default

#if there&#39;s only 1 col, the .() can be omitted
df[, arr_delay] %&gt;% head() #a vector as the column itself</code></pre>
<pre><code>## [1]  13  13   9 -26   1   0</code></pre>
<pre class="r"><code>#we can also use index here
df[, year:day] #var1 to var2</code></pre>
<pre><code>##         year month day
##      1: 2014     1   1
##      2: 2014     1   1
##      3: 2014     1   1
##      4: 2014     1   1
##      5: 2014     1   1
##     ---               
## 253312: 2014    10  31
## 253313: 2014    10  31
## 253314: 2014    10  31
## 253315: 2014    10  31
## 253316: 2014    10  31</code></pre>
<pre class="r"><code>#deselect using - or !
df[, !c(&quot;arr_delay&quot;, &quot;dep_delay&quot;)]</code></pre>
<pre><code>##         year month day carrier origin dest air_time distance hour
##      1: 2014     1   1      AA    JFK  LAX      359     2475    9
##      2: 2014     1   1      AA    JFK  LAX      363     2475   11
##      3: 2014     1   1      AA    JFK  LAX      351     2475   19
##      4: 2014     1   1      AA    LGA  PBI      157     1035    7
##      5: 2014     1   1      AA    JFK  LAX      350     2475   13
##     ---                                                          
## 253312: 2014    10  31      UA    LGA  IAH      201     1416   14
## 253313: 2014    10  31      UA    EWR  IAH      189     1400    8
## 253314: 2014    10  31      MQ    LGA  RDU       83      431   11
## 253315: 2014    10  31      MQ    LGA  DTW       75      502   11
## 253316: 2014    10  31      MQ    LGA  SDF      110      659    8</code></pre>
<pre class="r"><code>#or df[, -c(&quot;arr_delay&quot;, &quot;dep_delay&quot;)]

#deselect using index
df[, !(year:day)]</code></pre>
<pre><code>##         dep_delay arr_delay carrier origin dest air_time distance hour
##      1:        14        13      AA    JFK  LAX      359     2475    9
##      2:        -3        13      AA    JFK  LAX      363     2475   11
##      3:         2         9      AA    JFK  LAX      351     2475   19
##      4:        -8       -26      AA    LGA  PBI      157     1035    7
##      5:         2         1      AA    JFK  LAX      350     2475   13
##     ---                                                               
## 253312:         1       -30      UA    LGA  IAH      201     1416   14
## 253313:        -5       -14      UA    EWR  IAH      189     1400    8
## 253314:        -8        16      MQ    LGA  RDU       83      431   11
## 253315:        -4        15      MQ    LGA  DTW       75      502   11
## 253316:        -5         1      MQ    LGA  SDF      110      659    8</code></pre>
</div>
<div id="section-do-something-with-j" class="section level1">
<h1>Do something with <code>j</code></h1>
<pre class="r"><code>#rename
df[, .(delay_arr = arr_delay, delay_dep = dep_delay)] %&gt;% head()</code></pre>
<pre><code>##    delay_arr delay_dep
## 1:        13        14
## 2:        13        -3
## 3:         9         2
## 4:       -26        -8
## 5:         1         2
## 6:         0         4</code></pre>
<pre class="r"><code>#numbers .N
df[origin == &quot;JFK&quot; &amp; month == 6L, .N] %&gt;% head()</code></pre>
<pre><code>## [1] 8422</code></pre>
<pre class="r"><code>#.N is a special built-in variable that holds the number of observations in the current group.

#a same way
df[origin == &quot;JFK&quot; &amp; month == 6L, length(dest)]</code></pre>
<pre><code>## [1] 8422</code></pre>
<pre class="r"><code>#calculate mean value
df[origin == &quot;JFK&quot; &amp; month == 6L,
   .(m_arr = mean(arr_delay), m_dep = mean(dep_delay))] %&gt;% head()</code></pre>
<pre><code>##       m_arr    m_dep
## 1: 5.839349 9.807884</code></pre>
</div>
<div id="section-aggregation-using-by" class="section level1">
<h1>Aggregation using <code>by</code></h1>
<pre class="r"><code># by is similar to group_by() in tidyverse
# I imagine it as cut a large block into many small ones
# by will be the key index in output, which should be quite familiar with pandas user

# a simple example
df[, .N, by = origin] %&gt;% head()</code></pre>
<pre><code>##    origin     N
## 1:    JFK 81483
## 2:    LGA 84433
## 3:    EWR 87400</code></pre>
<pre class="r"><code># multiple group
df[carrier == &quot;AA&quot;, .N, by = .(origin, dest)] %&gt;% head()</code></pre>
<pre><code>##    origin dest    N
## 1:    JFK  LAX 3387
## 2:    LGA  PBI  245
## 3:    EWR  LAX   62
## 4:    JFK  MIA 1876
## 5:    JFK  SEA  298
## 6:    EWR  MIA  848</code></pre>
<pre class="r"><code># calculate in j
df[carrier == &quot;AA&quot;,
   .(mean(arr_delay), mean(dep_delay)),
   by = .(origin, dest, month)] %&gt;% head()</code></pre>
<pre><code>##    origin dest month        V1         V2
## 1:    JFK  LAX     1  6.590361 14.2289157
## 2:    LGA  PBI     1 -7.758621  0.3103448
## 3:    EWR  LAX     1  1.366667  7.5000000
## 4:    JFK  MIA     1 15.720670 18.7430168
## 5:    JFK  SEA     1 14.357143 30.7500000
## 6:    EWR  MIA     1 11.011236 12.1235955</code></pre>
<pre class="r"><code>#sorted_by: keyby
#nothing different but in a tidy way
df[carrier == &quot;AA&quot;,
   .(mean(arr_delay), mean(dep_delay)),
   keyby = .(origin, dest, month)] %&gt;% head()</code></pre>
<pre><code>##    origin dest month        V1        V2
## 1:    EWR  DFW     1  6.427673 10.012579
## 2:    EWR  DFW     2 10.536765 11.345588
## 3:    EWR  DFW     3 12.865031  8.079755
## 4:    EWR  DFW     4 17.792683 12.920732
## 5:    EWR  DFW     5 18.487805 18.682927
## 6:    EWR  DFW     6 37.005952 38.744048</code></pre>
<pre class="r"><code>#expression in by
df[, .N, .(dep_delay&gt;0, arr_delay&gt;0)] %&gt;% head()</code></pre>
<pre><code>##    dep_delay arr_delay      N
## 1:      TRUE      TRUE  72836
## 2:     FALSE      TRUE  34583
## 3:     FALSE     FALSE 119304
## 4:      TRUE     FALSE  26593</code></pre>
</div>
<div id="section-whats-.sd" class="section level1">
<h1>What’s <code>.SD</code>?</h1>
<p><code>.SD</code> means <em>S</em>elect of <em>D</em>ata. It’s a data.table that holds the data for the current group defined using <code>by</code>. I prefer regrading it as “grouped data”.</p>
<pre class="r"><code>#.SD
DT = data.table(
  ID = c(&quot;b&quot;,&quot;b&quot;,&quot;b&quot;,&quot;a&quot;,&quot;a&quot;,&quot;c&quot;),
  a = 1:6,
  b = 7:12,
  c = 13:18)
print(DT)</code></pre>
<pre><code>##    ID a  b  c
## 1:  b 1  7 13
## 2:  b 2  8 14
## 3:  b 3  9 15
## 4:  a 4 10 16
## 5:  a 5 11 17
## 6:  c 6 12 18</code></pre>
<pre class="r"><code>DT[, print(.SD), by = ID]</code></pre>
<pre><code>##    a b  c
## 1: 1 7 13
## 2: 2 8 14
## 3: 3 9 15
##    a  b  c
## 1: 4 10 16
## 2: 5 11 17
##    a  b  c
## 1: 6 12 18</code></pre>
<pre><code>## Empty data.table (0 rows and 1 cols): ID</code></pre>
<pre class="r"><code>#calculate each block&#39;s mean
DT[, lapply(.SD, mean), by = ID]</code></pre>
<pre><code>##    ID   a    b    c
## 1:  b 2.0  8.0 14.0
## 2:  a 4.5 10.5 16.5
## 3:  c 6.0 12.0 18.0</code></pre>
<p>So you can find <code>.SD</code> contains all columns as origin <code>DT</code> but without the grouping column <code>ID</code>. And <code>.SD</code> is well sorted.</p>
</div>
<div id="section-sdcol-specify-what-to-compute" class="section level1">
<h1><code>.SDcol</code> specify what to compute</h1>
<pre class="r"><code>df[carrier == &quot;AA&quot;,                       ## Only on trips with carrier &quot;AA&quot;
   lapply(.SD, mean),                     ## compute the mean
   by = .(origin, dest, month),           ## for every &#39;origin,dest,month&#39;
   .SDcols = c(&quot;arr_delay&quot;, &quot;dep_delay&quot;)] ## for just those specified in .SDcols</code></pre>
<pre><code>##      origin dest month  arr_delay  dep_delay
##   1:    JFK  LAX     1   6.590361 14.2289157
##   2:    LGA  PBI     1  -7.758621  0.3103448
##   3:    EWR  LAX     1   1.366667  7.5000000
##   4:    JFK  MIA     1  15.720670 18.7430168
##   5:    JFK  SEA     1  14.357143 30.7500000
##  ---                                        
## 196:    LGA  MIA    10  -6.251799 -1.4208633
## 197:    JFK  MIA    10  -1.880184  6.6774194
## 198:    EWR  PHX    10  -3.032258 -4.2903226
## 199:    JFK  MCO    10 -10.048387 -1.6129032
## 200:    JFK  DCA    10  16.483871 15.5161290</code></pre>
</div>
<div id="section-subset-.sdcol" class="section level1">
<h1>subset <code>.SDcol</code></h1>
<pre class="r"><code># return first 2 cols for each month
# you can always treat `by` as &quot;for each&quot;
df[, head(.SD, 2), by=month] %&gt;% head()</code></pre>
<pre><code>##    month year day dep_delay arr_delay carrier origin dest air_time distance
## 1:     1 2014   1        14        13      AA    JFK  LAX      359     2475
## 2:     1 2014   1        -3        13      AA    JFK  LAX      363     2475
## 3:     2 2014   1        -1         1      AA    JFK  LAX      358     2475
## 4:     2 2014   1        -5         3      AA    JFK  LAX      358     2475
## 5:     3 2014   1       -11        36      AA    JFK  LAX      375     2475
## 6:     3 2014   1        -3        14      AA    JFK  LAX      368     2475
##    hour
## 1:    9
## 2:   11
## 3:    8
## 4:   11
## 5:    8
## 6:   11</code></pre>
</div>


---

> Author: Rui Ying  
> URL: /2021-04-23-learning-data-table/  

