<?php
/*
Plugin Name: SearchTest
Description: A Test code
*/

// 添加短代码以显示搜索表单和结果表格
function custom_search_shortcode_test() {
    ob_start();
    ?>
    <form id="custom-search-form" method="POST">
        <input type="text" name="postcode" placeholder="请输入邮编" required />
        <input type="submit" value="搜索" />
    </form>
    <div id="custom-search-results"></div>
    <?php
    return ob_get_clean();
}
add_shortcode('custom_search_test', 'custom_search_shortcode_test');

// 处理搜索请求并返回结果
function custom_search_process_test() {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['postcode'])) {
        global $wpdb;
        $table_name = 'hospital_details'; // 替换为你的自定义表格名称

        $postcode = sanitize_text_field($_POST['postcode']);
        $results = $wpdb->get_results(
            $wpdb->prepare("SELECT * FROM $table_name WHERE postcode LIKE %s", $postcode)
        );

        if ($results) {
            ob_start();
            ?>
            <table>
                <tr>
                    <th>邮编</th>
                    <th>地址</th>
                    <th>电话</th>
                </tr>
                <?php
                foreach ($results as $result) {
                    ?>
                    <tr>
                        <td><?php echo esc_html($result->postcode); ?></td>
                        <td><?php echo esc_html($result->address); ?></td>
                        <td><?php echo esc_html($result->telephone); ?></td>
                    </tr>
                    <?php
                }
                ?>
            </table>
            <?php
            $output = ob_get_clean();
            echo $output;
        } else {
            echo '没有找到相关结果。';
        }
        exit; // 停止WordPress后续输出
    }
}
add_action('wp_ajax_custom_search', 'custom_search_process_test');
add_action('wp_ajax_nopriv_custom_search', 'custom_search_process_test');

