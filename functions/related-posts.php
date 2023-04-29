<?php
//RELATED POSTS

function howardlucas_related_posts()  {

    if (is_single() )  {

    global $post;

    $orig_post = $post;
    
    $categories = get_the_category($post->ID);
    
    if ($categories) {
    
    $category_ids = array();
    
    foreach($categories as $individual_category) $category_ids[] = $individual_category->term_id;
    
    $args=array(
        'category__in' => $category_ids[0],
        'post__not_in' => array($post->ID),
        'posts_per_page'=> 12,
        'ignore_sticky_posts'=> 1
);
    $category = get_the_category();
$firstCategory = $category[0]->cat_name;

    $my_query = new wp_query( $args );
    
    if( $my_query->have_posts() ) {
        
        echo '<div class="related-post-wrap">';

        echo '<h2>Similar in ' . $firstCategory . '</h2>';

        echo '<div class="related-wrap">';
    
    while( $my_query->have_posts() ) {

    $my_query->the_post(); ?>

    <div class="related-post">
        <h3><a href="<?php the_permalink() ?>"><?php echo howardlucas_excerpt(); ?></a></h3>
    </div>

    <?php
}
echo '</div>';
echo '</div>';
}
}
$post = $orig_post;
wp_reset_query();

}
}
