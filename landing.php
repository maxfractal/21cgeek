<?php 
		//define('WP_USE_THEMES', true);
		require( dirname( __FILE__ ) . '/21cgeek/wp-blog-header.php' );
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>21cGeek Xris Landing Page</title>

</head>

<body>
	<section>
	<article>
		<a href="21cgeek/index.php"><h1><?php echo(bloginfo('name')); ?></h1></a>
		<h4><?php echo(bloginfo('description')); ?></h4>
	</article>
</section>
	<?php 
		while(have_posts()) {
			the_post(); ?>
	<h2><a href="<?php the_permalink(); ?>"<?php the_title(); ?></a></h2>
		<?php the_content(); ?>
		<hr>
		<?php }
		
		?>	
	
</body>
</html>
