mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    if n == 1 {
        return 1;
    }
    if n == 2 {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
