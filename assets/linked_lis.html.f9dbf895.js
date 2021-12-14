import{c as n}from"./app.b1597b2c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u94FE\u8868\u7B97\u6CD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u7B97\u6CD5\u9898" aria-hidden="true">#</a> \u94FE\u8868\u7B97\u6CD5\u9898</h1><h2 id="\u53CD\u8F6C\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u94FE\u8868" aria-hidden="true">#</a> \u53CD\u8F6C\u94FE\u8868</h2><blockquote><p><code>ListNode</code></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
     <span class="token keyword">int</span> val<span class="token punctuation">;</span>
     <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
 
     <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u53CC\u94FE\u8868</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u53CD\u8F6C\u94FE\u8868
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u5355\u94FE\u8868\u5934\u8282\u70B9
  * <span class="token keyword">@return</span> \u53CD\u8F6C\u540E\u7684\u94FE\u8868\u8868\u5934
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u65B0\u94FE\u8868</span>
     <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//\u4E0B\u4E00\u8282\u70B9</span>
         <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
 
         <span class="token comment">//\u5C06\u8BBF\u95EE\u7684\u539F\u94FE\u8868\u7684\u8282\u70B9\u8BBE\u7F6E\u4E3A\u65B0\u94FE\u8868\u7684\u5934\u8282\u70B9</span>
         head<span class="token punctuation">.</span>next <span class="token operator">=</span> newHead<span class="token punctuation">;</span>
         newHead <span class="token operator">=</span> head<span class="token punctuation">;</span>
 
         <span class="token comment">//\u8BBF\u95EE\u539F\u94FE\u8868\u4E0B\u4E00\u8282\u70B9</span>
         head <span class="token operator">=</span> next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u904D\u5386\u4E00\u6B21\u94FE\u8868 \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</p></blockquote><ul><li>\u9012\u5F52\u8C03\u7528</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u53CD\u8F6C\u94FE\u8868
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u5355\u94FE\u8868\u5934\u8282\u70B9
  * <span class="token keyword">@return</span> \u53CD\u8F6C\u540E\u7684\u94FE\u8868\u8868\u5934
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ListNode</span> <span class="token function">reverseListRecursion</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u7EC8\u6B62\u9012\u5F52</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> head<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token comment">//\u4E0B\u4E00\u8282\u70B9</span>
     <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token comment">//\u4ECE\u7B2C\u4E8C\u4E2A\u8282\u70B9\u9012\u5F52\u8C03\u7528\u4E0B\u4E00\u8282\u70B9\uFF0Cnode\u4FBF\u662F\u53CD\u8F6C\u540E\u7684\u94FE\u8868\uFF0Cnext\u4FBF\u662F\u53CD\u8F6C\u540E\u7684\u94FE\u8868\u7684\u5C3E\u8282\u70B9</span>
     <span class="token class-name">ListNode</span> node <span class="token operator">=</span> <span class="token function">reverseListRecursion</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">//\u5C06\u5F53\u524D\u8282\u70B9\u8BBE\u7F6E\u4E3Anext\u8282\u70B9\u7684\u4E0B\u4E00\u8282\u70B9\uFF0C\u5373head\u53D8\u4E3A\u53CD\u8F6C\u540E\u94FE\u8868\u7684\u5C3E\u8282\u70B9</span>
     next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
     <span class="token comment">//head\u76F8\u5F53\u4E8E\u53CD\u8F6C\u540E\u94FE\u8868\u7684\u5C3E\u8282\u70B9\uFF0C\u5373\u662F\u9700\u8981\u5C06\u5176\u8BBE\u7F6E\u4E3Anull</span>
     head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     
     <span class="token keyword">return</span> node<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(N)\uFF0C\u5176\u4E2D N \u662F\u94FE\u8868\u7684\u957F\u5EA6\u3002\u9700\u8981\u5BF9\u94FE\u8868\u7684\u6BCF\u4E2A\u8282\u70B9\u8FDB\u884C\u53CD\u8F6C\u64CD\u4F5C \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(N)\uFF0C\u5176\u4E2D N \u662F\u94FE\u8868\u7684\u957F\u5EA6\u3002\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3B\u8981\u53D6\u51B3\u4E8E\u9012\u5F52\u8C03\u7528\u7684\u6808\u7A7A\u95F4\uFF0C\u6700\u591A\u4E3A N \u5C42</p></blockquote><h2 id="\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF" aria-hidden="true">#</a> \u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF</h2><ul><li>hash\u8868</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u8868\u5934
  * <span class="token keyword">@return</span> \u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u5DF2\u8BBF\u95EE\u8FC7\u7684\u8282\u70B9</span>
     <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//\u82E5\u8BE5\u8282\u70B9\u5DF2\u88AB\u8BBF\u95EE\u8FC7\u5219\u8868\u793A\u6709\u73AF</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//\u5C06\u8282\u70B9\u52A0\u5165set</span>
         set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//\u8BBF\u95EE\u4E0B\u4E00\u8282\u70B9</span>
         head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6O(N)\uFF1A\u5176\u4E2D N \u4E3A\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u3002\u904D\u5386\u6574\u4E2A\u94FE\u8868\u7684\u7ED3\u70B9 \u7A7A\u95F4\u590D\u6742\u5EA6O(N)\uFF1A\u5176\u4E2D N \u4E3A\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u3002\u6211\u4EEC\u9700\u8981\u5C06\u94FE\u8868\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u4FDD\u5B58\u5728\u54C8\u5E0C\u8868\u5F53\u4E2D\u3002</p></blockquote><ul><li>\u5FEB\u6162\u6307\u9488</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u8868\u5934
  * <span class="token keyword">@return</span> \u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF
  */</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token comment">//\u5FEB\u6307\u9488\uFF0C\u6BCF\u6B21\u8D70\u4E24\u6B65</span>
     <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
     <span class="token comment">//\u6162\u6307\u9488\uFF0C\u6BCF\u6B21\u8D70\u4E00\u6B65</span>
     <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
 
     <span class="token comment">//\u5982\u679C\u5FEB\u6307\u9488\u4E3Anull\uFF0C\u5219\u4E0D\u5B58\u5728\u73AF</span>
     <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
 
         <span class="token comment">//\u5FEB\u6307\u9488\u7684\u901F\u5EA6\u662F\u6162\u6307\u9488\u7684\u4E24\u500D\uFF0C\u5982\u679C\u76F8\u9047\u5219\u8868\u793A\u94FE\u8868\u6709\u73AF</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6O(N)\uFF1A\u5176\u4E2D N \u4E3A\u94FE\u8868\u4E2D\u8282\u70B9\u7684\u6570\u76EE\u3002\u5728\u6700\u521D\u5224\u65AD\u5FEB\u6162\u6307\u9488\u662F\u5426\u76F8\u9047\u65F6\uFF0Cslow \u6307\u9488\u8D70\u8FC7\u7684\u8DDD\u79BB\u4E0D\u4F1A\u8D85\u8FC7\u94FE\u8868\u7684\u603B\u957F\u5EA6 \u7A7A\u95F4\u590D\u6742\u5EA6O(1)\uFF1A\u989D\u5916\u4F7F\u7528\u7684\u6307\u9488\u5360\u7528\u5E38\u6570\u7A7A\u95F4</p></blockquote><h2 id="\u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9" aria-hidden="true">#</a> \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9</h2><ul><li>hash\u8868</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u8868\u5934
  * <span class="token keyword">@return</span> \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">entryNodeOfLoop</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//\u5DF2\u8BBF\u95EE\u8FC7\u7684\u8282\u70B9</span>
     <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//\u82E5\u8BE5\u8282\u70B9\u5DF2\u88AB\u8BBF\u95EE\u8FC7\uFF08\u7B2C\u4E00\u6B21\u51FA\u73B0\u91CD\u590D\u8282\u70B9\uFF09\u5219\u8868\u793A\u6709\u73AF</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span> head<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token comment">//\u5C06\u8282\u70B9\u52A0\u5165set</span>
         set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//\u8BBF\u95EE\u4E0B\u4E00\u8282\u70B9</span>
         head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n) \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u6700\u574F\u60C5\u51B5\u4E0B\uFF0C\u5355\u94FE\u8868\u7684\u6240\u6709\u7ED3\u70B9\u90FD\u5728\u5B58\u5165set</p></blockquote><ul><li>\u5FEB\u6162\u6307\u9488</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9
  *
  * <span class="token keyword">@param</span> <span class="token parameter">head</span> \u8868\u5934
  * <span class="token keyword">@return</span> \u94FE\u8868\u4E2D\u73AF\u7684\u5165\u53E3\u7ED3\u70B9
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">entryNodeOfLoop</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token comment">//\u5FEB\u6307\u9488\uFF0C\u6BCF\u6B21\u8D70\u4E24\u6B65</span>
     <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
     <span class="token comment">//\u6162\u6307\u9488\uFF0C\u6BCF\u6B21\u8D70\u4E00\u6B65</span>
     <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
 
     <span class="token comment">//\u5982\u679C\u5FEB\u6307\u9488\u4E3Anull\uFF0C\u5219\u4E0D\u5B58\u5728\u73AF</span>
     <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
 
         <span class="token comment">//\u5FEB\u6307\u9488\u7684\u901F\u5EA6\u662F\u6162\u6307\u9488\u7684\u4E24\u500D\uFF0C\u7B2C\u4E00\u6B21\u76F8\u9047\u8282\u70B9</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//\u5FEB\u6307\u9488\u7684\u901F\u5EA6\u662F\u6162\u6307\u9488\u7684\u4E24\u500D\uFF0C\u5C06\u5FEB\u6307\u9488\u6307\u5411\u5934\u8282\u70B9\uFF0C\u5FEB\u6307\u9488\u548C\u6162\u6307\u9488\u6BCF\u6B21\u8D70\u4E00\u6B65\uFF0C\u76F8\u9047\u7684\u5730\u65B9\u5C31\u662F\u5165\u53E3\u8282\u70B9</span>
             fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
             <span class="token comment">//\u76F8\u9047\u8282\u70B9</span>
             <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> slow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                 slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)\uFF0C\u9700\u8981\u5C06\u94FE\u8868\u7684\u6240\u6709\u7ED3\u70B9\u904D\u5386\u4E00\u904D \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)\uFF0C\u9700\u8981\u989D\u5916\u4E24\u4E2A\u5FEB\u6162\u6307\u9488\u6765\u904D\u5386\u7ED3\u70B9</p></blockquote><h2 id="\u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868" aria-hidden="true">#</a> \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868</h2><ul><li>\u8FED\u4EE3</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token doc-comment comment">/**
  * \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868
  *
  * <span class="token keyword">@param</span> <span class="token parameter">list1</span> \u9012\u589E\u7684\u94FE\u8868
  * <span class="token keyword">@param</span> <span class="token parameter">list2</span> \u9012\u589E\u7684\u94FE\u8868
  * <span class="token keyword">@return</span> \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868
  */</span>
 <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token class-name">ListNode</span> merge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">ListNode</span> current <span class="token operator">=</span> merge<span class="token punctuation">;</span>
     <span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             current<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
             list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
             current<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
             list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token comment">//\u672A\u6BD4\u5BF9\u7684\u8282\u70B9</span>
     current<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
 
     <span class="token keyword">return</span> merge<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(m+n)\uFF0Cm\uFF0Cn\u5206\u522B\u4E3A\u4E24\u4E2A\u5355\u94FE\u8868\u7684\u957F\u5EA6 \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</p></blockquote><ul><li>\u9012\u5F52</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868
 *
 * <span class="token keyword">@param</span> <span class="token parameter">list1</span> \u9012\u589E\u7684\u94FE\u8868
 * <span class="token keyword">@param</span> <span class="token parameter">list2</span> \u9012\u589E\u7684\u94FE\u8868
 * <span class="token keyword">@return</span> \u5408\u5E76\u4E24\u4E2A\u6392\u5E8F\u7684\u94FE\u8868
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> list1<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> list2<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(m+n) \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(m+n)\uFF0C\u6BCF\u4E00\u6B21\u9012\u5F52\uFF0C\u9012\u5F52\u6808\u90FD\u4F1A\u4FDD\u5B58\u4E00\u4E2A\u53D8\u91CF\uFF0C\u6700\u5DEE\u60C5\u51B5\u4F1A\u4FDD\u5B58(m+n)\u4E2A\u53D8\u91CF</p></blockquote>`,31);function e(t,l){return p}var r=s(a,[["render",e]]);export{r as default};
