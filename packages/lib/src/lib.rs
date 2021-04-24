use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // TODO: What should be here instead of C?
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
