<?php

namespace GFPDF_Vendor\QueryPath;

/**
 * Interface Query
 *
 * @package QueryPath
 *
 * @method after($data)
 * @method before($data)
 */
interface Query
{
    public function __construct($document = null, $selector = null, $options = []);
    public function find($selector);
    public function top($selector = null);
    public function next($selector = null);
    public function prev($selector = null);
    public function siblings($selector = null);
    public function parent($selector = null);
    public function children($selector = null);
}
