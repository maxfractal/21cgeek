<?php 
		//define('WP_USE_THEMES', true);
		require( dirname( __FILE__ ) . '/21cgeek/wp-blog-header.php' );
                
                include 'includes/includes.php';
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>21cGeek Xris Landing Page</title>

</head>

<body>
	<main>
		<section>
			<?php 
			
			$currentUser =wp_get_current_user(); 
			echo 'Current user = ' . $currentUser->user_login . '<br>';
			?>
		</section>
    <section>
        <?php echo site_url('/xris'); ?><br>
        <?php echo $home; ?><br>
        <?php echo $xCSS ?><br>
        <?php echo $xris ?>
    </section>
	<section>
	<article>
		<a href="21cgeek/index.php"><h1><?php echo(bloginfo('name')); ?></h1></a>
		<h4><?php echo(bloginfo('description')); ?></h4>
	</article>
</section>
</main>
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
