const e=JSON.parse('{"key":"v-0cd0012c","path":"/learning-docs/android/activity.html","title":"Android Activity","lang":"zh-CN","frontmatter":{"date":"2023-04-29T00:00:00.000Z","title":"Android Activity","shortTitle":"Activity","order":3,"category":["学习"],"tag":["android"],"description":"生命周期 onCreate: 创建活动。把页面布局加载进内存，进入了初始状态。 onStart: 开始活动。把活动页面显示在屏幕上，进入了就绪状态。 onResume: 恢复活动。活动页面进入活跃状态，能够与用户正常交互，例如允许响应用户的点击动作、允许用户输入文字等等。 onPause: 暂停活动。页面进入暂停状态，无法与用户正常交互。 onStop:停止活动。页面将不在屏幕上显示。 onDestroy:销毁活动。回收活动占用的系统资源，把页面从内存中清除。 onRestart: 重启活动。重新加载内存中的页面数据。","head":[["meta",{"property":"og:url","content":"https://en0x.com/learning-docs/android/activity.html"}],["meta",{"property":"og:site_name","content":"EN0X"}],["meta",{"property":"og:title","content":"Android Activity"}],["meta",{"property":"og:description","content":"生命周期 onCreate: 创建活动。把页面布局加载进内存，进入了初始状态。 onStart: 开始活动。把活动页面显示在屏幕上，进入了就绪状态。 onResume: 恢复活动。活动页面进入活跃状态，能够与用户正常交互，例如允许响应用户的点击动作、允许用户输入文字等等。 onPause: 暂停活动。页面进入暂停状态，无法与用户正常交互。 onStop:停止活动。页面将不在屏幕上显示。 onDestroy:销毁活动。回收活动占用的系统资源，把页面从内存中清除。 onRestart: 重启活动。重新加载内存中的页面数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://en0x.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-02T01:48:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Android Activity"}],["meta",{"property":"article:author","content":"Wesley"}],["meta",{"property":"article:tag","content":"android"}],["meta",{"property":"article:published_time","content":"2023-04-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-02T01:48:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Android Activity\\",\\"image\\":[\\"https://en0x.com/\\"],\\"datePublished\\":\\"2023-04-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-02T01:48:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Wesley\\",\\"url\\":\\"https://en0x.com/\\"}]}"]]},"headers":[{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":2,"title":"启动模式","slug":"启动模式","link":"#启动模式","children":[{"level":3,"title":"Standard（默认）","slug":"standard-默认","link":"#standard-默认","children":[]},{"level":3,"title":"SingleTop（栈顶复用）","slug":"singletop-栈顶复用","link":"#singletop-栈顶复用","children":[]},{"level":3,"title":"SingleTask（栈内复用）","slug":"singletask-栈内复用","link":"#singletask-栈内复用","children":[]},{"level":3,"title":"SingleInstance（全局唯一）","slug":"singleinstance-全局唯一","link":"#singleinstance-全局唯一","children":[]},{"level":3,"title":"启动标识","slug":"启动标识","link":"#启动标识","children":[]}]},{"level":2,"title":"Intent","slug":"intent","link":"#intent","children":[{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"传递数据","slug":"传递数据","link":"#传递数据","children":[]}]}],"git":{"createdTime":1682771471000,"updatedTime":1682992115000,"contributors":[{"name":"Wesley","email":"wesleyrowe@proton.me","commits":6},{"name":"Wesley Rowe","email":"100920417+bournerowe@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.2,"words":959},"filePathRelative":"learning-docs/android/activity.md","localizedDate":"2023年4月29日","excerpt":"<h2> 生命周期</h2>\\n<p></p>\\n<ul>\\n<li><code>onCreate</code>: 创建活动。把页面布局<strong>加载进内存</strong>，进入了初始状态。</li>\\n<li><code>onStart</code>: 开始活动。把活动页面<strong>显示</strong>在屏幕上，进入了就绪状态。</li>\\n<li><code>onResume</code>: 恢复活动。活动页面进入活跃状态，能够与用户<strong>正常交互</strong>，例如允许响应用户的点击动作、允许用户输入文字等等。</li>\\n<li><code>onPause</code>: 暂停活动。页面进入<strong>暂停</strong>状态，无法与用户正常交互。</li>\\n<li><code>onStop</code>:<strong>停止活动</strong>。页面将不在屏幕上显示。</li>\\n<li><code>onDestroy</code>:<strong>销毁活动</strong>。回收活动占用的系统资源，把页面从内存中清除。</li>\\n<li><code>onRestart</code>: 重启活动。<strong>重新加载内存</strong>中的页面数据。</li>\\n</ul>","autoDesc":true}');export{e as data};
