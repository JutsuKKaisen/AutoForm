# AutoForm
A Chrome extension that automatically fills in university lecturer survey forms. Supports two modes:  Single mode: Choose one fixed column to tick for all questions.  Random mode: Automatically tick random columns within a defined range.  Designed to save time when completing repetitive lecturer evaluations.

## ✨ Features
- **Two auto-fill modes**:
  - **Single mode** – Select one fixed column (e.g., always tick "Strongly Agree") for all questions.  
  - **Random mode** – Automatically choose random columns within a specified range (e.g., from column 2 to 4).  
- **Smart scrolling** – Each option is scrolled into view before ticking for better visibility.  
- **Safety limit** – Stops after 21 questions to avoid unexpected behavior.  

## 📖 How to Use
1. Open the lecturer survey page in your browser.  
2. Click on the **AutoForm** extension icon from the Chrome toolbar.  
3. Choose your mode:  
   - `Single mode`: enter the column number you want to tick.  
   - `Random mode`: enter the **from** and **to** column numbers to let AutoForm select randomly within that range.  
4. Click **Tick** and let AutoForm automatically complete the survey.  

## 🔧 Installation
1. Clone this repository or download the ZIP file and extract it:  
   ```bash
   git clone https://github.com/your-username/AutoForm.git

2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `AutoForm` folder.
5. The extension will appear in your browser and is ready to use.

## 📂 Project Structure

```
AutoForm/
│── manifest.json     # Extension configuration
│── popup.html        # User interface
│── popup.js          # Main logic
│── icons/            # Extension icons
```

## 🚀 Examples

* **Single Mode**: input `2` → all questions will be ticked in column 2.
* **Random Mode**: input `from: 1`, `to: 3` → each question will be randomly ticked between column 1 and column 3.

## ⚠️ Disclaimer

* This extension is for **educational and research purposes only**.
* Please make sure to comply with your institution’s rules and policies when using it.

---

Made with ❤️ by \JutsuKKaisen
