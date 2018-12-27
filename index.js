Vue.component('blog-post',{
	props: ['post'],
	template: `
		<div class="blog-post">
			<h3> {{ post.title }} </h3>
			<div v-html="post.content"></div>
		</div>
		`
})

new Vue({
	el: '#blog-post-demo',
	data: {
	  posts: [
		{ id: 1, title: 'My journey with Vue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eum aut vel doloribus officiis maiores consequatur expedita minima laudantium ducimus molestiae error aspernatur aliquid, ab deleniti dolore! Aspernatur, voluptatem labore.' },
		{ id: 2, title: 'Blogging with Vue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eum aut vel doloribus officiis maiores consequatur expedita minima laudantium ducimus molestiae error aspernatur aliquid, ab deleniti dolore! Aspernatur, voluptatem labore.' },
		{ id: 3, title: 'Why Vue is so fun', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores eum aut vel doloribus officiis maiores consequatur expedita minima laudantium ducimus molestiae error aspernatur aliquid, ab deleniti dolore! Aspernatur, voluptatem labore.' }
	  ]
	}
  })


    Vue.component('tab-home', { 
        template: '<div>Home component</div>' 
    })
    Vue.component('tab-posts', { 
        template: '<div>Posts component</div>' 
    })
    Vue.component('tab-archive', { 
        template: '<div>Archive component</div>' 
    })
    
    new Vue({
      el: '#dynamic-component-demo',
      data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
      },
      computed: {
        currentTabComponent: function () {
          return 'tab-' + this.currentTab.toLowerCase()
        }
      }
    })
  